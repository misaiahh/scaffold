import './style.css';
import './containers/Router';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <router-component></router-component>
    <nav>
    <a href="/" data-link>Home</a> 
    | 
    <a href="/posts" data-link>Posts</a> 
    | 
    <a href="/settings" data-link>Settings</a></nav>
  </div>
`;
