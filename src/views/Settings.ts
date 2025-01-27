import AbstractView from "./AbstractView";

export default class Settings extends AbstractView {
    constructor() {
        super();
        this.setTitle('Settings');
    }
    async getHtml() {
        return `
            <h1>Settings</h1>
            <p>Settings</p>
            <a href="/dashboard" data-link>back to dashboard</a>
        `;
    }
}