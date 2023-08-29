// import express
// const express = require("express");
// instanciate express
// const app = express();

const app = require("express")();

const otherData = 123;

app.get("/", (req, res) => {
    res.send({data: "This is the first request handler", otherData: otherData});
});

// task: create a dog endpoint that returs woof

app.get("/dog", (req, res) => {
    console.log(req.params);
    res.send({ dog: "Woof" });
    
});

app.get("/dog/:firstValue/:someOtherValue", (req,res) => {
    console.log(req.params);
    console.log(req.params.someOtherValue);
    res.send({ dog: "Meow" });
});
   
let balance = 100;
app.get("/wallet/:withdrawalAmount", (req, res) => {
    const withdrawalAmount = req.params.withdrawalAmount;
    balance -= withdrawalAmount;

    if (balance < 0) {
        balance += withdrawalAmount;
        res.send({ message: "You cant withdraw. No more money left" });
    } else {
        res.send({ message: `You have withdrawn ${req.params.withdrawalAmount}, your new balance is ${balance}` });
    }   
});


// 80 http
// 443 https
// 8080 http developer port
// 9090 https developer port
app.listen(8080);