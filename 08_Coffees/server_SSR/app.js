/*
import dotenv from 'dotenv';
dotenv.config();
*/
import "dotenv/config"

import express from 'express';
const app = express();

import path from 'path';
app.use(express.static(path.resolve("../client/dist")));

app.use(express.json());

import helmet from 'helmet';
app.use(helmet());


import session from 'express-session';
// 95b61b9d407f6ba0b6c6f58cbcf7929b31c17e62c127ec895bc36cbbb42a928bfa255ff31fe5dc32beca
app.use(session({
    // generate a secret key through node in terminal
    // require("crypto").randomBytes(42).toString("hex")
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // true for https
  }))



import usersRouter from './routers/usersRouter.js';
app.use(usersRouter);

import coffeesRouter from './routers/coffeesRouter.js';
app.use(coffeesRouter);

import coffeeLoverRouter from './routers/coffeeLoverRouter.js';
app.use(coffeeLoverRouter);

app.get("*", (req, res) => {
    res.sendFile(path.resolve("../client/dist/index.html"));
});



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => { 
    console.log(`Server listening on port ${PORT}`);
});