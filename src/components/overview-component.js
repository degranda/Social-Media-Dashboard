
class overviewComponent extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return ['title', 'img','nums','update', 'arrow'];
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        if(attr === 'img') {
            this.img = newVal;
        }
        if(attr === 'title') {
            this.title = newVal;
        }
        if(attr === 'nums') {
            this.nums = newVal
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
                    <span>${this.title}</span>
                    <img src="${this.img}"/>
                </div>
                <div class="update-section">
                    <span class="nums">${this.nums}</span>
                    <div>
                        <img src="${this.arrow}"/>
                        <span class="percentage">${this.update}</span>
                    </div>
                </div>
            </section>

            ${this.getStyles()}
        `;
    }
    getStyles() {
        return `
            <style>
                :host {
                    display: flex;
                    min-width: 250px;
                    height: 160px;
                    text-align: center;
                    background-color: hsl(227, 47%, 96%);
                    color: hsl(230, 17%, 14%);
                    border-radius: 5px;
                }
                section {
                    width: 100%;
                    padding: 20px 0px;
                }
                section div {
                    display: flex;
                    justify-content: space-around;
                }
                section .sn-section {
                    margin-top: 20px;
                    margin-bottom: 30px;
                }
                section .update-section .nums {
                    font-size: 25px;
                    font-weight: 700;
                }
                section .update-section img {
                    width: 10px;
                    height: 5px;
                    margin-top: 10px;
                    margin-right: 5px;
                }
                section .update-section .percentage {
                    color: var(--arrow);
                }
             </style>
        `;
    }
    connectedCallback() {
        this.render();
    }
}

customElements.define('ov-component', overviewComponent);