class section {
    constructor({ title, page, chips }) {
        this.element = document.createElement("section");
        let inner = ``;
        for (const chip of chips) {
            inner += `<div class="chip" style="background-color:${chip.color}33; border: 1px solid ${chip.color}33;">${chip.title}</div>`;
        }
        this.element.innerHTML = `<div class="title"><h1>${title}</h1>${inner}</div><hr>`;
        page.appendChild(this.element);
    }

    newColumn() {
        return new column({
            section: this.element,
        });
    }

    Destroy() {
        this.element.remove();
    }
}
