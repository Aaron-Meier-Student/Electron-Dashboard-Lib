class button {
    constructor({ label, title = "Untitled", icon, func, column }) {
        this.element = document.createElement("button");
        this.element.className = "button";
        this.element.innerHTML = `${icon ? `<i class="fi fi-${icon}"></i>` : ""}${title}`;
        this.element.addEventListener("click", func);
        if (label) {
            this.label = document.createElement("h4");
            this.label.innerHTML = label;
            this.element.appendChild(this.label);
        };
        if (func) this.element.addEventListener("click", func);
        column.appendChild(this.element);
    }
    
    toggle() {
        this.element.disabled = !this.element.disabled;
    }

    Destroy() {
        this.element.remove();
    }
}