import express from "express";
const app = express();

app.use(express.static("public"));


// ====================== Read Pages  ======================

import { frontpagePage, setupPage, datatypesPage, scopePage, frontendPage, contactPage } from "./util/preparePages.js";

// ====================== HTML  ======================


app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/setup", (req, res) => {
    res.send(setupPage);
});

app.get("/datatypes", (req, res) => {
    res.send(datatypesPage);
});

app.get("/scope", (req, res) => {
    res.send(scopePage);
});

app.get("/frontend", (req, res) => {
    res.send(frontendPage);
});

app.get("/contact", (req, res) => {
    res.send(contactPage);
});

// ====================== PORT  ======================

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
