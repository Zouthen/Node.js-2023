import express from 'express';
const app = express();

app.use(express.static('public'));

import http from 'http';
const server = http.createServer(app);

import { Server } from 'socket.io';
const io = new Server(server);

io.on("connection", (socket) => {
    console.log("A socket connected", socket.id);

    socket.on("client-choose-color", (data) => {
         
        // emits to all sockets in the namespace
        io.emit("server-sent-color", data); 

        // emits to all sockets in the namespace except the socket that sent the message
        //socket.broadcast.emit("server-sent-color", data); 

        // only emits to the socket itself
        //socket.emit("server-sent-color", data);
    });
})

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => { console.log(`Server listening on port ${PORT}`)});