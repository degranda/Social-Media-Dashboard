import './general-view-component.js';
import './overview-component.js';

import { facebook, twitter, instagram, youtube } from '../data.js';

import { dailyFacebook, dailyFacebookLikes, dailyInstagramLikes, dailyInstagram, dailyTwitter, dailyTwitterLikes, dailyYoutubeLikes, dailyYoutube } from '../data.js'

class myApp extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.render();

    }
    render() {
        this.shadowRoot.innerHTML = this.getTemplate();
    }
    getTemplate() {
        return `
            <header>
                <div class="header-container">
                    <div class="title-container">
                        <h1>Social Media Dashboard</h1>
                        <p>Total Followers: 23,004</p>
                    </div>
                    <div class="toggle-container">
                        <input type="checkbox" />
                        <span class="toggle-title">Dark Mode</span>
                    </div>
                </div>
            </header>
            <main>
                <section class="gv-container">
                    <gv-component class="facebook" img='${facebook.img}'
                        sn='${facebook.sn}'
                        nums=${facebook.nums}
                        followers='${facebook.followers}' 
                        update='${facebook.update}'
                        arrow="${youtube.arrowUp}"></gv-component>

                    <gv-component class="twitter" img='${twitter.img}'
                        sn='${twitter.sn}'
                        nums=${twitter.nums}
                        followers='${twitter.followers}'
                        update='${twitter.update}'
                        arrow="${youtube.arrowUp}"></gv-component>

                    <gv-component class="instagram" img='${instagram.img}' 
                        sn='${instagram.sn}'
                        nums=${instagram.nums}
                        followers='${instagram.followers}'
                        update='${instagram.update}'
                        arrow="${youtube.arrowUp}"></gv-component>

                    <gv-component class="youtube" img='${youtube.img}' 
                        sn='${youtube.sn}'
                        nums=${youtube.nums}
                        followers='${youtube.followers}'
                        update='${youtube.update}'
                        arrow="${youtube.arrowDown}"></gv-component>
                </section>
                <div>
                    <h2>Overview - Today</h2>
                </div>
                <section class="ov-container"> 
                    <ov-component class="arrow-up" img="${dailyFacebook.img}"
                        title="${dailyFacebook.title}"
                        nums=${dailyFacebook.nums}
                        update="${dailyFacebook.update}"
                        arrow="${dailyFacebook.arrowUp}"></ov-component>

                    <ov-component class="arrow-down" img="${dailyFacebookLikes.img}"
                        title="${dailyFacebookLikes.title}"
                        nums=${dailyFacebookLikes.nums}
                        update="${dailyFacebookLikes.update}"
                        arrow="${dailyFacebookLikes.arrowDown}"></ov-component>

                    <ov-component class="arrow-up" img="${dailyInstagramLikes.img}"
                        title="${dailyInstagramLikes.title}"
                        nums=${dailyInstagramLikes.nums}
                        update="${dailyInstagramLikes.update}"
                        arrow="${dailyInstagramLikes.arrowUp}"></ov-component>

                    <ov-component class="arrow-up" img="${dailyInstagram.img}"
                        title="${dailyInstagram.title}"
                        nums=${dailyInstagram.nums}
                        update="${dailyInstagram.update}"
                        arrow="${dailyInstagram.arrowUp}"></ov-component>

                    <ov-component class="arrow-up" img="${dailyTwitter.img}"
                        title="${dailyTwitter.title}"
                        nums=${dailyTwitter.nums}
                        update="${dailyTwitter.update}"
                        arrow="${dailyTwitter.arrowUp}"></ov-component>

                    <ov-component class="arrow-up" img="${dailyTwitterLikes.img}"
                        title="${dailyTwitterLikes.title}"
                        nums=${dailyTwitterLikes.nums}
                        update="${dailyTwitterLikes.update}"
                        arrow="${dailyTwitterLikes.arrowUp}"></ov-component>

                    <ov-component class="arrow-down" img="${dailyYoutubeLikes.img}"
                        title="${dailyYoutubeLikes.title}"
                        nums=${dailyYoutubeLikes.nums}
                        update="${dailyYoutubeLikes.update}"
                        arrow="${dailyYoutubeLikes.arrowDown}"></ov-component>

                    <ov-component class="arrow-down" img="${dailyYoutube.img}"
                        title="${dailyYoutube.title}"
                        nums=${dailyYoutube.nums}
                        update="${dailyYoutube.update}"
                        arrow="${dailyYoutube.arrowDown}"></ov-component>
                </section>
            </main>
            ${this.getStyles()}
        `;
    }
    getStyles() {
        return `
            <style>
                :host {
                    display: block;
                    width: 100vw;
                    height: 100vh;
                    --facebook: hsl(195, 100%, 50%);
                    --twitter: hsl(203, 89%, 53%);
                    --instagram: hsl(329, 70%, 58%);
                    --youtube: hsl(348, 97%, 39%);
                    --font-color: hsl(228, 12%, 44%);
                }
                :host([dark]) header {
                    background-color: hsl(232, 19%, 15%);
                }
                :host([dark]) {
                    background: hsl(230, 17%, 14%);
                    color: hsl(0, 0%, 100%);
                }
                :host([dark]) gv-component, :host([dark]) ov-component {
                    background: hsl(228, 28%, 20%);
                    color: hsl(228, 34%, 66%);
                    --nums-color: hsl(0, 0%, 100%);
                }
                header {
                    width: 100%;
                    height: 300px;
                    background-color: hsl(225, 100%, 98%);
                }
                header .header-container {
                    display: flex;
                    max-width: 1050px;
                    margin: 0 auto;
                    padding: 0 10px;
                    padding-top: 50px;
                }
                header .toggle-container {
                    align-self: center;
                }
                header .title-container, header .toggle-container {
                    width: 50%;
                }
                header .title-container h1 {
                    margin: 0;
                }
                header .toggle-container input {
                    float: right;
                }
                header .toggle-container input[type="checkbox"] {
                    position: relative;
                    width: 80px;
                    height: 40px;
                    -webkit-appearance: none; 
                    background: linear-gradient(45deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%));
                    border-radius: 20px;
                    outline: none;
                    box-shadow: inset 0 0 5px rgba(0,0,0,.2);
                }
                header .toggle-container input[type="checkbox"]:before {
                    content: '';
                    position: absolute;
                    width: 35px;
                    height: 35px;
                    border-radius: 20px;
                    background: #f4f7ff;
                    top: 2px;
                    right: 2px;
                    transition: .5s;
                    box-shadow: 0 0 5px rgba(0,0,0,.2);
                }
                header .toggle-container input:checked[type="checkbox"]:before {
                    right: 43px;
                    background: hsl(232, 19%, 15%);
                }
                header .toggle-container span {
                    float: right;
                    margin-right: 15px;
                    margin-top: 13px;
                }
                header div p {
                    color: var(--font-color);
                    margin-top: 5px;
                }
                main {
                    max-width: 1100px;
                    margin: 0 auto;
                    text-align: center;
                    margin-top: -100px;
                    padding: 0 10px;
                }
                .gv-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    column-gap: 10px;
                    row-gap: 15px;
                }
                gv-component:hover {
                    cursor: pointer;
                    background-color: hsl(227, 36%, 91%);
                }
                ov-component:hover {
                    cursor: pointer;
                    background-color: hsl(227, 36%, 91%);
                }
                .facebook {
                    border-top: 5px solid var(--facebook);
                    --arrow: hsl(163, 72%, 41%);
                }
                .twitter {
                    border-top: 5px solid var(--twitter);
                    --arrow: hsl(163, 72%, 41%);
                }
                .instagram {
                    border-top: 5px solid var(--instagram);
                    --arrow: hsl(163, 72%, 41%);
                }
                .youtube {
                    border-top: 5px solid var(--youtube);
                    --arrow: hsl(356, 69%, 56%);
                }
                main .ov-container h2 {
                    color: var(--font-color);
                    float: left;
                    margin-left: 20px;
                }
                .ov-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    column-gap: 10px;
                    row-gap: 15px;
                    justify-items: center;
                }
                .arrow-down {
                    --arrow: hsl(356, 69%, 56%);
                }
                .arrow-up {
                    --arrow: hsl(163, 72%, 41%);
                }
             </style>
        `;
    }
    handleClick(e) {
        this.dispatchEvent( new CustomEvent('toggle-click', {
            detail: {
                data: "dark"
            },
            bubbles: true,
        }))
    }
    connectedCallback() {
        this.toggle = false;
        const toggle = this.shadowRoot.querySelector('input[type="checkbox"]');
        const toggleTitle = this.shadowRoot.querySelector('.toggle-title');
        toggle.addEventListener('click', (e) => {
            if(this.toggle === false) {
                toggleTitle.textContent = "Light Mode";
                this.toggle = true;
            } else {
                toggleTitle.textContent = "Dark Mode";
                this.toggle = false;
            }
            this.handleClick(e);
        })
    }
}

customElements.define('my-app', myApp);