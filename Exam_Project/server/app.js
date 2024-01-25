import "dotenv/config";
import express from 'express';

const app = express();

import http from "http";
import { Server } from "socket.io";
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["*"]
    }
});

import path from "path";
app.use(express.static(path.resolve("../client/dist")));
app.use(express.json()); 
   
/*
import bodyParser from 'body-parser';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
*/
import { rateLimit } from 'express-rate-limit';
const allRoutesRatelimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 50,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
});
app.use(allRoutesRatelimiter);

const authRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 15,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
});
app.use("/auth", authRateLimiter);

import helmet from 'helmet';
app.use(helmet());

import cors from 'cors';
app.use(cors({
    credentials: true,
    origin: true
}));

// ============== Session ==============

import session from 'express-session';
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
// ============== Sockets ==============

io.on("connection", (socket) => {
    socket.on("client-choose-a-color", (data) => {
        io.emit("server-sent-a-color", {
            color: data.color,
            name: data.name || "data.color",
        });
    });
});

// ============== Routers ==============

import beastsDBRouter from './routers/beastsDBRouter.js';
app.use(beastsDBRouter);

import factsRouter from './routers/factsRouter.js';
app.use(factsRouter);

import authFirebaseRouter from "./routers/authFirebaseRouter.js";
app.use(authFirebaseRouter);

import contactRouter from "./routers/contactRouter.js";
app.use(contactRouter);

// ============== Wildcard route ==============

app.get('*', (req, res) => {
    res.send("<h1>404 - Page Not Found</h1>");
});

app.all('*', (req, res) => {
    res.status(404).send({ data: `Unsupported Request ${req.path}` });
});

//=============================================================================

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
