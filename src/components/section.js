class section {
    constructor({ title, page, chips }) {
        this.section = document.createElement("section");
        let inner = ``;
        for (const chip of chips) {
            inner += `<div class="chip" style="background-color:${chip.color}33; border: 1px solid ${chip.color}33;">${chip.title}</div>`;
        }
        this.section.innerHTML = `<div class="title"><h1>${title}</h1>${inner}</div><hr>`;
        page.appendChild(this.section);
    }

    newColumn({ title = "Untitled" }) {
        return new column({
            title,
            section: this.section,
        });
    }

    Destroy() {
        this.section.remove();
    }
}
