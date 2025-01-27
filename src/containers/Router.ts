import AbstractView from '../views/AbstractView';
import Dashboard from '../views/Dashboard';
import Posts from '../views/Posts';
import Settings from '../views/Settings';

export default class Router extends HTMLElement {
    private routes: { pathname: string, view: () => InstanceType<typeof AbstractView> }[];

    constructor() {
        super();
        this.routes = [
            /** This is the default route in case the pathname does not match any of the other routes */
            {
                pathname: '/',
                view: () => new Dashboard()
            },
            {
                pathname: '/posts',
                view: () => new Posts()
            },
            // {
            //     pathname: '/posts/:id',
            //     view: () => new Posts()
            // },
            {
                pathname: '/settings',
                view: () => new Settings()
            }
        ];
    }

    connectedCallback() {
        window.addEventListener('popstate', this.routeTo);

        document.addEventListener('DOMContentLoaded', () => {
            document.body.addEventListener('click', (event) => {
                if (event.target instanceof HTMLAnchorElement && event.target.matches('[data-link]')) {
                    event.preventDefault();
                    this.navigateTo(event.target.href);
                }
            });
            this.routeTo();
        });
    }

    private navigateTo = (url: string) => {
        history.pushState(null, '', url);
        this.routeTo();
    };

    private routeTo = async () => {
        const to = this.routes.find(route => route.pathname === location.pathname);

        if (!to) {
            this.navigateTo(this.routes[0].pathname);
        } else {
            document.querySelector('#app')!.innerHTML = await to.view().getHtml();
        }
    };
}

customElements.define('router-component', Router);