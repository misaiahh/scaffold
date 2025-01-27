import AbstractView from '../views/AbstractView';
import Dashboard from '../views/Dashboard';
import Posts from '../views/Posts';
import Settings from '../views/Settings';

export default class Router extends HTMLElement {
    private routes: { pathname: string, view: () => InstanceType<typeof AbstractView> }[];

    constructor() {
        super();
        this.routes = [
            {
                pathname: '/',
                view: () => new Dashboard()
            },
            {
                pathname: '/posts',
                view: () => new Posts() // fix this
            },
            {
                pathname: '/settings',
                view: () => new Settings() // fix this
            }
        ];
    }

    connectedCallback() {
        window.addEventListener('popstate', this.route);

        document.addEventListener('DOMContentLoaded', () => {
            document.body.addEventListener('click', (event) => {
                if (event.target instanceof HTMLAnchorElement && event.target.matches('[data-link]')) {
                    event.preventDefault();
                    this.navigateTo(event.target.href);
                }
            });
            this.route();
        });
    }

    private navigateTo = (url: string) => {
        history.pushState(null, '', url);
        this.route();
    };

    private route = async () => {
        const view = this.routes.find(route => route.pathname === location.pathname) || this.routes[0];
        document.querySelector('#app')!.innerHTML = await view.view().getHtml();
    };
}

customElements.define('router-component', Router);