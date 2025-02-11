class table {
    constructor({ data, column }) {
        this.element = document.createElement("table");
        column.appendChild(this.element);
        this.update(data);
    }

    update(data) {
        this.element.innerHTML = "";
        for (const row of data) {
            const tr = document.createElement("tr");
            for (const cell of row) {
                const td = document.createElement("td");
                td.innerHTML = cell;
                tr.appendChild(td);
            }
            this.element.appendChild(tr);
        }
    }
}
