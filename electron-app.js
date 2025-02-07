const { app, BrowserWindow, ipcMain } = require("electron");
const fs = require("fs");
const path = require("path");

require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron"),
});

let win;

const createWindow = () => {
    win = new BrowserWindow({
        minWidth: 1280,
        minHeight: 720,
        fullscreenable: true,
        resizable: true,
        titleBarStyle: "hidden",
        frame: false,
        transparent: true,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    win.loadFile("./src/index.html");
};

ipcMain.on("close", () => {
    app.quit();
});

ipcMain.on("maximize", () => {
    if (win.isMaximized()) win.unmaximize();
    else win.maximize();
});

ipcMain.on("minimize", () => {
    win.minimize();
});

app.whenReady().then(() => {
    createWindow();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});
