class generalViewComponent extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

    }
    static get observedAttributes() {
        return ['img','sn','nums','followers','update', 'arrow'];
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        if(attr === 'img') {
            this.img = newVal;
        }
        if(attr === 'sn') {
            this.sn = newVal;
        }
        if(attr === 'nums') {
            this.nums = newVal
        }
        if(attr === 'followers') {
            this.followers = newVal
        }
        if(attr === 'update') {
            this.update = newVal
        } 
        if(attr === 'arrow') {
            this.arrow = newVal
        }
    }
    render() {
        this.shadowRoot.innerHTML = this.getTemplate();
    }
    getTemplate() {
        return `
            <section>
                <div class="sn-section">
                    <img src="${this.img}"/>
                    <span>${this.sn}</span>
                </div>
                <div class="followers-section">
                    <h2>${this.nums}</h2>
                    <span>${this.followers}</span>
                </div>
                <div class="updates-section">
                    <img class="arrow-icon" src="${this.arrow}"/>
                    <span>${this.update}</span>
                </div>
            </section>
            ${this.getStyles()}
        `;
    }
    getStyles() {
        return `
            <style>
                :host {
                    display: inline-block;
                    min-width: 250px;
                    height: 200px;
                    text-align: center;
                    background-color: hsl(227, 47%, 96%);
                    color: hsl(230, 17%, 14%);
                    border-radius: 5px;
                }
                .sn-section {
                    margin-top: 25px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .sn-section img {
                    width: 25px;
                    height: 25px;
                    margin-right: 10px;
                }
                .sn-section span {
                    font-weight: 700;
                }
                .followers-section {
                    margin-bottom: 15px;
                }
                .followers-section h2 {
                    font-size: 45px;
                    margin: 25px 0 0 0;
                    color: var(--nums-color, black);
                }
                .followers-section span {
                    font-weight: lighter;
                    letter-spacing: 5px;
                }
                .updates-section .arrow-icon {
                    width: 10px;
                }
                .updates-section span {
                    color: var(--arrow);
                }
            </style>
        `;
    }
    connectedCallback() {
        this.render();
    }
}

customElements.define('gv-component', generalViewComponent);