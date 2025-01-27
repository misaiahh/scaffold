import AbstractView from "./AbstractView";

export default class Dashboard extends AbstractView {
    constructor() {
        super();
        this.setTitle('Dashboard');
    }
    async getHtml() {
        return `
            <h1>Dashboard</h1>
            <p>Dashboard</p>
            <a href="/posts" data-link>View recent posts</a>
        `;
    }
}