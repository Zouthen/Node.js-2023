import "dotenv/config"

import express from 'express';
const app = express();

import bodyParser from 'body-parser';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

import { rateLimit} from 'express-rate-limit';

const allRoutesRatelimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 2000, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Use an external store for consistency across multiple server instances.
});

app.use(allRoutesRatelimiter);

const authRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 5000, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Use an external store for consistency across multiple server instances.
});

app.use("/auth", authRateLimiter);

const checkAuth = (req, res, next) => {
	if (req.session && req.session.userId) {
		return next()
	} else {
		return res.status(401).send({ data: "Unauthorised" })
	}
}

import helmet from 'helmet';
app.use(helmet());

import cors from 'cors';
app.use(cors({
    credentials: true,
    origin: true
  }));

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

// ============== Routers ==============

import usersRouter from './routers/usersRouter.js';
app.use(usersRouter);

import beastsRouter from './routers/beastsRouter.js';
app.use(beastsRouter);

import authFirebaseRouter from "./routers/authFirebaseRouter.js"
app.use(authFirebaseRouter)

import contactRouter from "./routers/contactRouter.js"
app.use(contactRouter)

app.get('/protected', checkAuth, (req, res) => {
	res.status(200).send({ data: 'This is a protected route' });
  });


// ============== Wildcard route ==============

app.get('*', (req, res) => {
  res.send("<h1>404 - Page Not Found</h1>");
});

app.all('*', (req, res) => {
  res.status(404).send({ data: `Unsupported Request ${req.path}`});
});

//=============================================================================

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => { 
    console.log(`Server listening on port ${PORT}`);
});