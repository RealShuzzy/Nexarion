const {app, BrowserWindow } = require('electron');
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
        
    });

    const startUrl = url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file'

    });

    mainWindow.loadURL(startUrl);
}

app.whenReady().then(createMainWIndow);