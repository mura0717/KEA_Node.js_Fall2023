//const express = require('express'); //CommonJS
import express from "express";
import bodyParser from "body-parser"
import nodemailer from "nodemailer";

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json());


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

//=================== NODEMAILER =================
app.post("/contact", (req,res) => {
    //console.log("OK Thanks for the message");
    //res.send({ data: "Thanks for the message."});
    console.log(req.email)

     const output = `
    <p>You have a new contact request</p>
    <h4>Contact Details</h4>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
    </ul>
    <h4>Message</h4>
    <p>${req.body.message}</p>
    `
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, 
        auth: {
            user: 'ava.collins90@ethereal.email',
            pass: 'Kq7AXRrpkDXPH6nBQs'
        },
        tls:{
            rejectUnauthorized: false
        }
          });
    
    const mailOptions = {
        from: '"Pokemon Contact" <"ava.collins90@ethereal.email>',
        to: "pokemonAdmin@lortemail.dk",
        subject: "New Contact Request",
        text: "This message just arrived:",
        html: output
    }; 
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Error: " + error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    //res.redirect("/");
})


//=================== CONNECTION =================
//console.log("Here:", process.env.PORT);
//const PORT = 8080;
//const PORT = Number(process.env.PORT);
const PORT = Number(process.env.PORT) || 8080; //if no env. varibale then takes 8080 as default.
app.listen(PORT, () => console.log ("Server is running on port:", PORT));