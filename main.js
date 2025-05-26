const {app, BrowserWindow, ipcMain } = require('electron');
const url = require('url');
const path = require('path');

function createMainWIndow() {
    const mainWindow = new BrowserWindow({
        title: 'Nexarion',
        width: 1280,
        height: 720,
        autoHideMenuBar: true,

        minWidth: 640,
        minHeight: 360,

        webPreferences: {
            contextIsolation: true,
            nodeIntegration: true,
            preload: path.join(__dirname, './preload.js'),
        }
        
    });

    mainWindow.webContents.openDevTools()

    const startUrl = url.format({
        pathname: path.join(__dirname, './nexarion/build/index.html'),
        protocol: 'file'

    });

    mainWindow.loadURL(startUrl); //startUrl
}

app.whenReady().then(createMainWIndow);

ipcMain.on('submit:todoForm', (event, opts) => {
    console.log(opts);
});