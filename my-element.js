class MyElement extends HTMLElement {
    constructor() {
        super();

        this.text = "...";

        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `
            <div>
                <style>
                    * {
                        padding: 0;
                        margin: 0;
                    }
                    p {
                        background-color: #f4f4f4;
                    }
                </style>
    
                <slot></slot> <button>Click</button>
            </div>
        `;

        this.render = this.render.bind(this);
    }

    render() {
        const content = document.createElement("p");

        content.innerHTML = this.text;
        this.shadowRoot.appendChild(content);
    }

    connectedCallback() {
        this.text = this.getAttribute("text") || this.text;

        this.button = this.shadowRoot.querySelector("button");
        this.button.addEventListener("click", this.render);
    }

    disconnectedCallback() {
        this.button.removeEventListener("click", this.render);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }

        if (name === "text") {
            this.text = newValue;

            this.render();

            console.log("text changed!");
        }
    }

    static get observedAttributes() {
        return ["text"];
    }
}

customElements.define("my-element", MyElement);

//[...document.querySelectorAll(".myElement")][0].setAttribute("text", "aaa");