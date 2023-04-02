const { app, BrowserWindow } = require('electron')
const PHPServer = require('php-server-manager');
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
    win.loadURL('http://'+server.host+':'+server.port+'')

}
// PHP SERVER CREATION /////

let server = new PHPServer({
    php: `${__dirname}/php-src/sapi/cli/php`,
    host: 'localhost',
    port: 8000,
    script: `${__dirname}/app/public/index.php`,
    config: `${__dirname}/php.ini`,
    directory: `${__dirname}/app/public/`,
    directives: {
        display_errors: 1,
        expose_php: 1
    }
});



app.whenReady().then(() => {
    server.run();
    createWindow()
})
app.on('window-all-closed', () => {
    server.close();
    if (process.platform !== 'darwin') app.quit()
})