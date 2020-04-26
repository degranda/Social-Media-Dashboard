import './components/my-app.js';

const el = document.querySelector('my-app');
const dark = document.createAttribute('dark');

el.addEventListener('toggle-click', (e) => {
    if(el.hasAttribute('dark')) {
        el.removeAttribute('dark');
    } else {
        el.setAttribute('dark', dark);
    }
})