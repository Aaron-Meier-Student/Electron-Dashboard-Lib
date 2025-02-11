class checkbox {
    constructor({ label, title = "Untitled", func, status, column }) {
        this.enabled = status;
        this.element = document.createElement("button");
        this.element.className = `checkbox ${this.enabled ? "enabled" : ""}`;
        this.element.innerHTML = title;
        if (label) {
            this.label = document.createElement("h4");
            this.label.innerHTML = label;
            this.element.appendChild(this.label);
        }
        if (func) {
            this.element.addEventListener("click", () => {
                this.enabled = !this.enabled;
                this.element.classList.toggle("enabled");
                func(this.enabled);
            });
        }
        column.appendChild(this.element);
    }

    toggle() {
        this.enabled = !this.enabled;
        this.element.classList.toggle("enabled");
    }

    setText(text) {
        this.element.innerHTML = this.label
            ? `<h4>${this.label.innerHTML}</h4>${text}`
            : text;
    }

    Destroy() {
        this.element.remove();
    }
}
