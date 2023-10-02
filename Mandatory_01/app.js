//import express from "express";
const express = require("express");
const app = express();

//import path from "path";

//console.log(path.resolve("./public/frontpage.html"));

app.use(express.static("public"));

const {getWelcomeMessage} = require("./util/welcomeMessageUtil.js");

app.get("/", (req, res) => {
    //res.sendFile(path.resolve("./public/frontpage.html"));
    res.sendFile(__dirname + '/public/frontpage.html');
});

app.get('/datatypes', (req, res) => {
    res.sendFile(__dirname + '/public/datatypes.html');
  });

app.get('/frontend', (req, res) => {
    res.sendFile(__dirname + '/public/frontend.html');
  });

app.get('/scope', (req, res) => {
    res.sendFile(__dirname + '/public/scope.html');
  });

app.get('/setup', (req, res) => {
    res.sendFile(__dirname + '/public/setup.html');
  });


  app.get("/welcomeMessage", (req, res) => {
    const clientName = req.query.user;
    const welcomeMessage = getWelcomeMessage(clientName);
    res.send({ data: welcomeMessage });
});



const PORT = 8080;
app.listen(PORT, (error) => {
    if (error){
        console.log("Error starting the server", error);
        return;
    }
    console.log("Server is running on port",8080);
});