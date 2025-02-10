class slider {
    constructor({ title, min, max, start, func, column }) {
        this.slider = document.createElement("input");
        this.slider.type = "range";
        this.slider.min = min;
        this.slider.max = max;
        this.slider.value = min;
        this.slider.title = title;
        this.slider.addEventListener("input", () => {
            func(this.slider.value);
        })
        column.appendChild(this.slider);
    }
}