//const express = require('express');
import express from "express";
const app = express();

app.use(express.static("public"));

import path from "path" // because __dirname is not defined in ES Module scope.
import { randomIntFromInterval } from "./util/randomUtil.js";

console.log(process.env);

//console.log(path.resolve("./public/frontpage.html"))
//console.log(path.resolve("./")) //gives absolute path
//console.log(path.resolve("../../")) // each '../' goes up one folder of the current folder we are in.

// ========================READ PAGES==============================

import {frontpagePage, battlePage, contactPage} from "./util/preparePages.js"
// import * as pages from "./util/preparePages.js";

// ========================HTML==============================
app.get("/", (req, res) => {
    //res.send(pages.frontpagePage)
    res.send(frontpagePage);
    //res.sendFile(path.resolve("./public/frontpage/frontpage.html"));
});

app.get("/battle", (req, res) => {
    res.send(battlePage);
    //res.sendFile(path.resolve("./public/battle/battle.html"));
});

app.get("/contact", (req, res) => {
    res.send(contactPage)
    //res.sendFile(path.resolve("./public/contact/contact.html"));
});


// =========================Routes================================

let currentPokemon;

app.get("/battlepokemon", (req, res) => {

    if (!currentPokemon || currentPokemon.strength <= 1){
        const randomPokemonId = randomIntFromInterval(1, 151);
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
        .then(((response) => {
            if (!response.ok) {
            throw new Error("Error getting a pokemon.");
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
            
            res.send({ data: currentPokemon});
        })
    }
    else {
        currentPokemon.strength--;
        res.send({ data: currentPokemon});
    }
        
})

//console.log("Here:", process.env.PORT);
//const PORT = 8080;
//const PORT = Number(process.env.PORT);
const PORT = Number(process.env.PORT) || 8080; //if no env. varibale then takes 8080 as default.
app.listen(PORT, () => console.log ("Server is running on port:", PORT));