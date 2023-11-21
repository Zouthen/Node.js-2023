import "dotenv/config";
import express from "express";
const app = express();

import path from "path";
app.use(express.static(path.resolve("../client/dist")));    

app.use(express.json());

import cors from "cors";
app.use(cors({
    credentials: true,
    origin: true
}));

import session from "express-session";
const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
});
app.use(sessionMiddleware);

import usersRouter from "./routers/usersRouters.js";
app.use(usersRouter);

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["*"]
    }
});

const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);
io.use(wrap(sessionMiddleware));

io.on("connection", (socket) => {
    socket.on("client-choose-a-color", (data) => {
        data.name = socket.request.session.name;
        io.emit("server-sent-a-color", data);
    });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, console.log("Server is running on port", PORT));
