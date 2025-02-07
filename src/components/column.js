class column {
    constructor({ title, section }) {
        this.column = document.createElement("div");
        this.column.className = "column";
        section.appendChild(this.column);
    }

    Destroy() {}
}