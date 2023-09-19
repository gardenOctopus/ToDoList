import './style.css';
import createInbox from "./inbox";

function pageLoad() {
    const body = document.querySelector('body');
    body.classList.add('body');
    const content = document.querySelector('#content');
    content.appendChild(createInbox());
}

export default pageLoad;

