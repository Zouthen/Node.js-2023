import express from "express";
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

import { randomIntFromInterval } from "./util/randomUtil.js";

// ====================== Read Pages  ======================

import { frontpagePage, battlePage, contactPage } from "./util/preparePages.js";

// ====================== HTML  ======================


app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/battle", (req, res) => {
    res.send(battlePage);
});

app.get("/contact", (req, res) => {
    res.send(contactPage);
});

// ====================== Routes  ======================


let currentPokemon;

app.get("/battlepokemon", (req, res) => {

    if (!currentPokemon || currentPokemon.strength <= 1) {
        const randomPokemonId = randomIntFromInterval(1, 151)
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
        .then(((response) => {
            if (!response.ok) {
                throw new Error("Error getting a pokemon");
            }
            return response.json();
        }))
        .then((result) => {
            const name = result.name.charAt(0).toUpperCase() + result.name.slice(1);
            const imageURL = result.sprites.other.home.front_default;
            const strength = randomIntFromInterval(1, 10);

            currentPokemon = {
                name, 
                imageURL,
                strength
            };

            res.send({ data: currentPokemon });
        });
    }
    else {
        currentPokemon.strength--;
        res.send({ data: currentPokemon });
    }
});

app.post("/contact", (req, res) => {
    console.log("OK Thanks for the message!" , req.body);
    res.redirect("/");
});

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
