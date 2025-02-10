class column {
    constructor({ section }) {
        this.element = document.createElement("div");
        this.element.className = "column";
        section.appendChild(this.element);
    }

    newTitle(text) {
        return new title(this.element, text);
    }
    newButton({ label, title = "Untitled", icon, func }) {
        return new button({ label, title, icon, func, column: this.element });
    }
    newCheckbox({ label, title = "Untitled", func }) {
        return new checkbox({ label, title, func, column: this.element });
    }
    newInput({ label, title = "Untitled", func }) {
        return new input({ label, title, func, column: this.element });
    }
    newSlider({ title = "Untitled", min = 0, max = 100, start = 50, func }) {
        return new slider({ title, min, max, func, start, column: this.element });
    }
    newTable({ title = "Untitled" }) {
        return new table({ title, column: this.element });
    }
    createBreak() {
        const navBreak = document.createElement("hr");
        this.element.appendChild(navBreak);
    }
    newContainer() {
        return new column({section: this.element});
    }

    Destroy() {
        this.column.remove();
    }
}