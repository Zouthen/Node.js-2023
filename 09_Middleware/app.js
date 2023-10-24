import express from 'express';
const app = express();

import { rateLimit} from 'express-rate-limit';

const allRoutesRatelimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 200, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Use an external store for consistency across multiple server instances.
});

app.use(allRoutesRatelimiter);

const authRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Use an external store for consistency across multiple server instances.
});

app.use("/auth", authRateLimiter);

app.post("/auth/login", (req, res) => {
    res.send();
});

app.post("/auth/signup", (req, res) => {
    res.send();
});


function doorman(req, res, next) {
    if (req.params.secretPhrase === "SesameOpen") {
        next();
    } else {
        res.status(403).send({data: "You are not allowed here"});
    }
}

app.get('/secretRoom/:secretPhrase', doorman, (req, res) => {
    res.send({data: "You have found the secret room"});
});

function ipLogger(req, res, next) {
    console.log("IP log:", new Date(), req.ip);
    next();
}

app.use("/room", ipLogger);  

function butler(req, res, next) {
    console.log("Welcome to the mansion", req.ip);
    next();

}




app.get('/room', butler, ipLogger, (req, res, next) => {
    console.log("Room 1");
    next();
    //res.send({data : "This is room 1"});
});

app.get('/room', (req, res, next) => {
    console.log("Welcome to this exclusive room");
    next();
}, (req, res, next) => {
    console.log("Room 2");
    //next();
    res.send({data : "This is room 2"});
});

app.get('/room/*', (req, res, next) => {
    console.log("Room Unknown");
    res.send({data : "This is an unknown room"});
});


app.get('*', (req, res) => {
    res.send("<h1>404 - Page Not Found</h1>");
});

app.all('*', (req, res) => {
    res.status(404).send({ data: `Unsupported Request ${req.path}`});
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});