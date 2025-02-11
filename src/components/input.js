class input {
    constructor({ label, title = "Untitled", placeholder, func, column }) {
        this.enabled = status;
        this.element = document.createElement("div");
        this.element.className = "input";
        this.title = document.createElement("h3");
        this.title.innerText = title;
        this.input = document.createElement("input");
        this.element.appendChild(this.input);
        this.element.appendChild(this.title);
        this.input.placeholder = placeholder;
        if (label) {
            this.label = document.createElement("h4");
            this.label.innerHTML = label;
            this.element.appendChild(this.label);
        };
        if (func) {
            this.element.addEventListener("focusout", () => {
                func(this.input.value);
            });
        };
        column.appendChild(this.element);
    }
    
    toggle() {
        this.enabled = !this.enabled;
        this.element.classList.toggle("enabled");
    }

    Destroy() {
        this.element.remove();
    }
}