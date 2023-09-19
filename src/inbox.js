import './style.css';

function createInbox() {
    const INBOX_HEADER = document.createElement(h2);
    INBOX_HEADER.classList.add('h2');
    INBOX_HEADER.textContent = 'Inbox';
    
    return INBOX_HEADER;
}

export default createInbox;