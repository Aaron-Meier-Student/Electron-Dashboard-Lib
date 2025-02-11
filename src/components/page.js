class Page {
    constructor({ title, icon, set }) {
        this.button = document.createElement("button");
        this.page = document.createElement("div");
        this.page.className = "page hidden";
        this.button.innerHTML = `<i class="fi fi-${icon}"></i>${title}`;
        this.button.addEventListener("click", () => {
            if (this.button.classList.contains("active")) return;
            document.querySelectorAll("nav button").forEach((button) => {
                if (!button.classList.contains("active")) return;
                button.classList.remove("active");
            });
            this.button.classList.add("active");
            document.querySelectorAll("main .page").forEach((page) => {
                if (page.classList.contains("hidden")) return;
                page.classList.remove("fadeIn");
                setTimeout(() => {
                    page.classList.add("hidden");
                }, 250);
            });
            this.page.classList.remove("hidden");
            setTimeout(() => {
                this.page.classList.add("fadeIn");
            }, 10);
        });

        document.querySelector("nav").appendChild(this.button);
        document.querySelector("main").appendChild(this.page);
        if (set) this.button.click();
    }

    newSection({ title = "Untitled", chips = [] }) {
        return new section({ title, chips, page: this.page });
    }

    Destroy() {
        this.button.remove();
        this.page.remove();
    }
}
