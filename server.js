const net = require('net');

const host = 'localhost';
const port = 3000;
const server = net.createServer((socket) => {
    let socketAddress = socket.address();
    socket.on('data', (data) => {
        console.log(`Got a message from ${socketAddress.address}:${socketAddress.port} : ${data}`);
        socket.write(reverseString(data));
   });

   socket.on('close', () => {
       console.log(`${socketAddress.address}:${socketAddress.port} disconnected.`);
   });

}).listen(port, host);

function reverseString(data) {
    let string = data.toString();
    if (string.split(' ').length === 1) {
        return string.split("").reverse().join("");
    } else {
        return string.split(" ").reverse().join(" ");
    };
};
