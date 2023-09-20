import './style.css';
import createInbox from "./inbox";

function pageLoad() {
    const BODY = document.querySelector('body');
    BODY.classList.add('body');
    const CONTENT = document.querySelector('#content');
    CONTENT.appendChild(createInbox());
}

export default pageLoad;

