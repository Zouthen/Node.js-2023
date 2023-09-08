const express = require("express");
const app = express();
app.use(express.json());


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


// Create a new mountain
app.post("/mountains", (req, res) => {
    const newMountain = req.body;
    if (!newMountain.name || !newMountain.height) {
        res.status(400).send({ error: "Name and height are required for creating a mountain" });
    } else {
        newMountain.id = mountains.length + 1;
        mountains.push(newMountain);
        res.status(201).send({ data: newMountain });
    }
});


// Delete a mountain by id
app.delete("/mountains/:id", (req, res) => {
    const pathVariableMountainId = parseInt(req.params.id);
    if (isNaN(pathVariableMountainId)) {
        res.status(400).send({ error: "The mountain id must be a number" });
    } else {
        const index = mountains.findIndex((mountain) => mountain.id === pathVariableMountainId);
        if (index !== -1) {
            const deletedMountain = mountains.splice(index, 1)[0];
            res.send({ data: deletedMountain });
        } else {
            res.status(404).send({ error: "Mountain not found" });
        }
    }
});

// Update a mountain by id
app.patch("/mountains/:id", (req, res) => {
    const pathVariableMountainId = parseInt(req.params.id);
    if (isNaN(pathVariableMountainId)) {
        res.status(400).send({ error: "The mountain id must be a number" });
    } else {
        const updatedMountain = req.body;
        if (!updatedMountain.name && !updatedMountain.height) {
            res.status(400).send({ error: "At least one of 'name' or 'height' must be provided for updating a mountain" });
        } else {
            const index = mountains.findIndex((mountain) => mountain.id === pathVariableMountainId);
            if (index !== -1) {
                // Partially update the mountain with the provided data
                if (updatedMountain.name) {
                    mountains[index].name = updatedMountain.name;
                }
                if (updatedMountain.height) {
                    mountains[index].height = updatedMountain.height;
                }
                res.send({ data: mountains[index] });
            } else {
                res.status(404).send({ error: "Mountain not found" });
            }
        }
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