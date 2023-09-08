// import Express
const express = require("express");
// instantiate Express
const app = express();

// const app = require("express")();

app.use(express.json());

/*
app.get("/", (req, res) => {
    res.send({ data: "This is the first request handler" });
});

app.get("/dog", (req, res) => {
    console.log(req.params);
    res.send({ dog: "Woof" });
});

app.get("/dog/:firstValue/:someOtherValue", (req, res) => {
    console.log(req.params);
    console.log(req.params.someOtherValue);
    res.send({ dog: "Meow" });
});

app.get("/cat", (req, res) => {
    console.log(req.query);
    res.send({ data: req.query });
});

let balance = 100;
app.get("/wallet/:withdrawalAmount", (req, res) => {
    const withdrawalAmount = req.params.withdrawalAmount;
    balance -= withdrawalAmount;

    if (balance < 0) {
        balance += withdrawalAmount;
        res.send({ message: "You can't withdraw. No more money left."});
    } else {
        res.send({ message: `You've withdrawn ${withdrawalAmount}`});
    }
});
*/

app.post("/giveMeTheBody", (req, res) => {
    console.log(req.body);
    res.send({data:req.body});
});


// 80 http
// 443 https
// 8080 http developer port
// 9090 https developer port

app.listen(8080);