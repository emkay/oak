const {app, BrowserWindow, Menu} = require('electron')
const menuTemplate = require('./config/menu-template')

let win

function createWindow () {
  win = new BrowserWindow({width: 1200, height: 800})
  win.loadURL(`file://${__dirname}/index.html`)
  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })

  const menu = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(menu)
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
