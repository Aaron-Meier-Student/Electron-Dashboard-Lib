class title {
    constructor(column, title) {
        this.element = document.createElement("h3");
        this.element.innerHTML = title;
        column.appendChild(this.element);
    }

    Destroy() {
        this.element.remove();
    }
}
