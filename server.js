const http= require('http');
const myApp=require('./app');
myApp.set('port',process.env.PORT||3000);
const server= http.createServer(myApp);
const port=3000;
server.listen(process.env.PORT||port);