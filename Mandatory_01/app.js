import express from "express";
const app = express();

import path from "path";

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/frontpage.html"));
});


const PORT = 8080;
app.listen(PORT, (error) => {
    if (error){
        console.log("Error starting the server", error);
        return;
    }
    console.log("Server is running on port",8080);
});