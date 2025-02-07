function titleBar(ipcRenderer) {
    const minimizeBtn = document.querySelector("#titleBar .mini");
    const maximizeBtn = document.querySelector("#titleBar .full");
    const closeBtn = document.querySelector("#titleBar .close");

    minimizeBtn.addEventListener("click", () => {
        ipcRenderer.send("minimize");
    });

    maximizeBtn.addEventListener("click", () => {
        ipcRenderer.send("maximize");
    });

    closeBtn.addEventListener("click", () => {
        ipcRenderer.send("close");
    });
}