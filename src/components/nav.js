function navigationHandler() {
    const shrinkBtn = document.querySelector("nav .shrink");
    shrinkBtn.addEventListener("click", () => {
        shrinkBtn.classList.toggle("mini");
        document.querySelector("nav").classList.toggle("mini");
        document.querySelector("main").classList.toggle("mini");
    });
}
