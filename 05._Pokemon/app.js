//const express = require('express');
import express from "express";
const app = express();

app.use(express.static("public"));

import path from "path" // because __dirname is not defined in ES Module scope.

//console.log(path.resolve("./public/frontpage.html"))
//console.log(path.resolve("./")) //gives absolute path
//console.log(path.resolve("../../")) // each '../' goes up one folder of the current folder we are in.

// ========================HTML==============================
app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/frontpage/frontpage.html"));
});

app.get("/battle", (req, res) => {
    res.sendFile(path.resolve("./public/battle/battle.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.resolve("./public/contact/contact.html"));
});


// =========================Routes================================

let currentPokemon;

app.get("/battlepokemon", (req, res) => {
    
})


const PORT = 8080;
app.listen(PORT, () => console.log ("Server is running on port:", PORT));