const express = require("express");
const app = express();

const mountains = [
    { id: 1, name: "Mount Fuji", height: "3776" },
    { id: 2, name: "Mount Kilimanjaro", height: "5895" },
    { id: 3, name: "Himmelbjerget", height: "147" },
];

// Show all mountains
app.get("/mountains", (req, res) => {
    res.send({data: mountains});
});

// Show one mountain by id

// 1st solution
/*
app.get("/mountains/:id", (req,res) => {
    res.send({data: mountains.find(mountain => mountain.id === parseInt(req.params.id))});
});
*/

// 2nd solution
app.get("/mountains/:id", (req, res) => {
    const pathVariableMountainId = parseInt(req.params.id);
    if (!pathVariableMountainId) {
        res.send({error: "The mountain id must be a number"});
    } else {
        const foundMountain = mountains.find((mountain) => mountain.id === parseInt(req.params.id));

        res.send({data: foundMountain});
    }
});




const PORT = 8080;
app.listen(PORT, (error) => {
    if (error){
        console.log("Error starting the server", error);
        return;
    }
    
    console.log("Server is running on port",8080);
});