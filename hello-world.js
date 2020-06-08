class HelloWorld extends HTMLElement {
    constructor() {
        super();

        console.log("Hello world");
    }
}

customElements.define("hello-world", HelloWorld);