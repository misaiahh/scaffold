import AbstractView from "./AbstractView";

export default class Posts extends AbstractView {
    constructor() {
        super();
        this.setTitle('Posts');
    }
    async getHtml() {
        return `
            <h1>Posts</h1>
            <p>Posts</p>
            <a href="/settings" data-link>go to settings</a>
        `;
    }
}