const app = require("express")();

const mountains = [];
mountains.push({id: 1, name: "Mount Everest"});
mountains.push({id: 2, name: "K2"});
mountains.push({id: 3, name: "Kangchenjunga"});
mountains.push({id: 4, name: "Lhotse"});
mountains.push({id: 5, name: "Makalu"});

// Show the first request handler
app.get("/", (req, res) => {
    res.send({data: "This is the first request handler"});
});

// Show all mountains
app.get("/mountains", (req, res) => {
    res.send({Mountains: mountains});
});

// Show one mountain by id
app.get("/mountains/:id", (req,res) => {
    res.send({Mountains: mountains.find(mountain => mountain.id === parseInt(req.params.id))});
});




app.listen(8080);