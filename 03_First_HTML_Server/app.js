const express = require("express");
const app = express();

app.use(express.static("public"));

const {getWelcomeMessage} = require("./util/welcomeMessageUtil.js");

//console.log(__dirname);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/home.html");
});

// create a route for the page "secondPage.html"
app.get("/secondPage", (req, res) => {
    res.sendFile(__dirname + "/public/secondPage.html");
});

// ===================================================
//console.log(welcomeMessageUtil);

app.get("/welcomeMessage", (req, res) => {
    const clientName = req.query.user;
    const welcomeMessage = getWelcomeMessage(clientName);
    res.send({ data: welcomeMessage });
});
    
// ===================================================
const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log("Server failed to start",error);
        return;
    } 
    console.log(`Server is running on port`, PORT);
});