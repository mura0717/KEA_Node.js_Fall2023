//const express = require('express');
import express from "express";
const app = express();

app.use(express.static("public"));

import path from "path" // because __dirname is not defined in ES Module scope.

//console.log(path.resolve("./public/frontpage.html"))
//console.log(path.resolve("./")) //gives absolute path
//console.log(path.resolve("../../")) // each '../' goes up one folder of the current folder we are in.

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/frontpage.html"));
});



const PORT = 8080;
app.listen(PORT, () => console.log ("Server is running on port:", PORT));