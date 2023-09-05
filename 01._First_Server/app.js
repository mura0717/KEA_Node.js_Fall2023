// import express
const express = require("express");

// instantiante express
const app = express();

//in one line:
//const app = require("express")();

app.use(express.json());

const otherData = 123;

// get(1st parameter: in-point, 2nd parameter: callback)

app.get("/", (req, res) => {
    res.send({data: "This is the first request handler.", otherData});
});

// task: dog endpoint returns woof

app.get("/dog", (req, res) => {
    res.send({dog: "Woof"}); //res.json does the same thing but is now unnecessary.
});

//"/dog/{PathVariable}"
app.get("/dog/:firstValue/:someOtherValue", (req, res) => {
    console.log(req.params);
    console.log(req.params.firstValue);
    console.log(req.params.someOtherValue);
    res.send({dog: "Meow"});
});

app.get("/cat", (req, res) => {
    console.log(req.query);
    res.send({ data: req.query});
}) 

let balance = 100;
app.get("/wallet/:withdrawalAmount", (req, res) => {
    balance = balance-req.params.withdrawalAmount;
    if (balance < 0){
        res.send({message: "You can't withdraw. Not enough credit."});
    } else {
        res.send({ message: `You withdrew ${req.params.withdrawalAmount} , New Balance: ${balance}`});
    }
});

app.post("/giveMeTheBody", (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

//80 http
//443 https
//8080 http developer
//9090 https developer

app.listen(8080); //hang in the terminal, check http://localhost:8080/