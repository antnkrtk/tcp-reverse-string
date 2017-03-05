const net = require('net');

const host = '192.168.100.9';
const port = 2000;

const server = net.createServer();

server.listen(port, host, () => console.log(`TCP server is running on ${host}:${port}`));

server.on('connection', (socket) => {
    console.log(`${socket.remoteAddress}:${socket.remotePort} connected.`);

    socket.on('data', (data) => {
        console.log(`Got a message from ${socket.remoteAddress}:${socket.remotePort} : ${data}`);
        socket.write(data.toString().split(" ").reverse().join(" "));
    });

    socket.on('close', () => {
        console.log(`${socket.remoteAddress}:${socket.remotePort} disconnected.`);
    });
});
