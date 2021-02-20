const express = require('express');
const http = require("http")
const app = express();
const server = http.createServer(app);
const socket  =require("socket.io");
const io = socket(server);

io.on("connection", socket =>{
    socket.emit("your id",socket.id);
    socket.on("send")
})
server.listen(5000,() =>{console.log("running server on port 5000");});
