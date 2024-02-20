const http= require('http');
const myApp=require('./app');
const normalizePort=val=>{
    const port=parseInt(val,10);
    if(isNaN(port)){
        return val;
    }
    if(port>=0){
        return port;
    }
    return false;
};
const port= normalizePort(process.env.PORT||'3000');
myApp.set('port',port);

const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const server = http.createServer(myApp);

server.on('error', errorHandler);
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('Listening on ' + bind);
});
server.listen(port);

the normalizePort function returns a valid port, whether provided as a number or a string;

The errorHandler function checks for different errors and handles them appropriately. It is then saved in the server;

an event listener is also registered, logging the port or named pipe the server is running on to the console