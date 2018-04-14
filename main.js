// 引入electron并创建一个Browserwindow
const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
const StaticServer = require('static-server');

const ipc = require('electron').ipcMain;
const cronJob = require('cron').CronJob;
// 保持window对象的全局引用,避免JavaScript对象被垃圾回收时,窗口被自动关闭.
let mainWindow
let token = ""
// var server = new StaticServer({
//   rootPath: path.join(__dirname,'build'),                // required, the root of the server file tree
//   port: 3000,               // required, the port to listen
//   name: 'my-http-server',   // optional, will set "X-Powered-by" HTTP header
//   host: 'localhost',       // optional, defaults to any interface
//   cors: '*',                // optional, defaults to undefined
//   followSymlink: true,      // optional, defaults to a 404 error
// });
function createWindow() {
  //创建浏览器窗口
  mainWindow = new BrowserWindow({ width: 1080, height: 720, webPreferences: { preload: path.join(__dirname, "preload.js") } })

  mainWindow.loadURL('http://localhost:3000/');
  // 打开开发者工具，默认不打开
  // mainWindow.webContents.openDevTools()

  // 关闭window时触发下列事件.
  mainWindow.on('closed', function () {
    mainWindow = null;
  })
}

function createCameraWindows() {
  const modalPath = path.join('file://', __dirname, 'src/windows/HTML5Camera.html')
  let win = new BrowserWindow({ frame: false, width: 800, height: 600 })
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
  win.show()
  // win.webContents.openDevTools();
}

// 当 Electron 完成初始化并准备创建浏览器窗口时调用此方法
app.on('ready', function () {


  // server.start(function () {
  //   console.log('Server listening to', server.port);
  // });

  createWindow();

})
ipc.on('camera-message', function (event, arg) {
  createCameraWindows();
  event.sender.send('camera-message-reply', '验证通过')
})
var tevent;
var jobid = new cronJob('*/30 * * * * *', () => {
  createCameraWindows();
  this.tevent.sender.send('checking_employee_message', 'pong')
}, null, false, 'Asia/Chongqing');

ipc.on('finish_check_employee_message', (event, arg) => {
  if(tevent != undefined) {
    this.tevent.sender.send('checking_employee_finish_message', 'pong')
  }
})

ipc.on('start_check_employee_message', (event, arg) => {
  jobid.start();
  this.tevent = event;
});

ipc.on('end_check_employee_message', (event, arg) => {
  jobid.stop();
  this.tevent = event;

});

ipc.on('get_mine_token', (event, arg) => {
  // this.token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMDAyMSIsImNyZWF0ZWQiOjE1MjI2NzkxNzU0NTYsImV4cCI6MTUyMzI4Mzk3NX0.aVfzBSOxtrsjffx4K-Jja9jiR_v7YA5fp1HkvXYwrovMAXnDprYk6jrzfC180BK57gWM5xi8WJhoqDXmdkDocQ'
  event.returnValue = token;
})

ipc.on('Login', (event, arg) => {
  token = arg;
  createCameraWindows();

  // console.log(arg)
  event.returnValue = 'ok'
})

// 所有窗口关闭时退出应用.
app.on('window-all-closed', function () {
  // macOS中除非用户按下 `Cmd + Q` 显式退出,否则应用与菜单栏始终处于活动状态.
  if (process.platform !== 'darwin') {
    // server.stop();
    app.quit()
  }
})

app.on('activate', function () {
  // macOS中点击Dock图标时没有已打开的其余应用窗口时,则通常在应用中重建一个窗口
  if (mainWindow === null) {
    createWindow()
  }
})

// 你可以在这个脚本中续写或者使用require引入独立的js文件.   
