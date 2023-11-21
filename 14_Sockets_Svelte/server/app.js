import "dotenv/config";
import express from "express";
const app = express();

app.use(express.json());

import cors from "cors";
app.use(cors({
    credentials: true,
    origin: true
}));

import session from "express-session";
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

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

io.on("connection", (socket) => {
    socket.on("client-choose-a-color", (data) => {
        io.emit("server-sent-a-color", data);
    });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, console.log("Server is running on port", PORT));