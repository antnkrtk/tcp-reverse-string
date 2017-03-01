const net = require('net');
const readline = require('readline');

const client = new net.Socket();
client.connect(3000, 'localhost');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let enterString = () => {
    rl.question('Enter string you\'d like to reverse: ', (data) => {
        if (data === 'exit') {
            rl.close();
            return client.destroy();
        };
        client.write(data);
  });
};

client.on('data', (data) => {
    console.log(`Reversed string: ${data}`);
    enterString();
});

enterString();
