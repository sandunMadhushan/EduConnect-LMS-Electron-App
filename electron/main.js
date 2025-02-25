const { app, BrowserWindow } = require('electron');
const path = require('path');
const { spawn } = require('child_process');
let mainWindow;
let flaskProcess;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // Start Flask server
  startFlaskServer();
  
  // Give Flask some time to start
  setTimeout(() => {
    mainWindow.loadURL('http://localhost:5000');
  }, 2000);

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

function startFlaskServer() {
  const pythonPath = process.env.PYTHON_PATH || 'C:/Python312/python.exe';

  const flaskAppPath = path.join(app.getAppPath(), 'app.py');

  flaskProcess = spawn(pythonPath, [flaskAppPath]);

  flaskProcess.stdout.on('data', (data) => {
    console.log(`Flask: ${data}`);
  });

  flaskProcess.stderr.on('data', (data) => {
    console.error(`Flask error: ${data}`);
  });
}


app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
  
  // Kill Flask server
  if (flaskProcess) {
    flaskProcess.kill();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on('quit', () => {
  // Kill Flask server
  if (flaskProcess) {
    flaskProcess.kill();
  }
});