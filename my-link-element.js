class MyLinkElement extends HTMLAnchorElement {
    connectedCallback() {
        this.addEventListener("click", e => {
            e.preventDefault();

            console.log("Clicked!");
        });
    }
}

customElements.define("my-link-element", MyLinkElement, { extends: "a" });