const express = require("express");
const app = express();


// Local Time String
console.log(Date());
// UTC
console.log(new Date());
// Epoch timestamp / Unix
console.log(Date.now());

// task1: Create a route thay returns the date
app.get("/date", (req, res) => {
    res.send({ data: new Date() });
});

// task2: Create a route returns the current month with the name
app.get("/month", (req, res) => {
    const monthName = new Date().toLocaleString("default", { month: "long" });
    res.send({ data: monthName });
});

// task3: Create a route that returns the current day
app.get("/day", (req, res) => {
    const dayName = new Date().toLocaleString("default", { weekday: "long" });
    res.send({ data: dayName });
});



const PORT = 8080;
app.listen(PORT, (error) => {
    if (error){
        console.log("Error starting the server", error);
        return;
    }
    console.log("Server is running on port",8080);
});