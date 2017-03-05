const net = require('net');
const readline = require('readline');

const client = new net.Socket();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

client.connect(2000, '192.168.100.9', () => {
    console.log('Connection to server established.');
    enterString();
});

client.on('data', (data) => {
    console.log(`Reversed string: ${data}`);
    enterString();
});

function enterString() {
    rl.question('Enter string you\'d like to reverse: ', (data) => {
        if (data === 'exit') {
            rl.close();
            return client.destroy();
        };
        client.write(data);
    });
};
