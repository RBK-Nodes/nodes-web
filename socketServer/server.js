const server = require('http').createServer();

const io = require('socket.io')(server, {
    path: '/test',
    serveClient: true,
    // below are engine.IO options
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false
});
server.listen(5000);
console.log(`listening on port 5000`)
io.on('connection', () => {
    console.log('a new connection')
})