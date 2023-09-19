const express = require("express");
const app = express ();

app.use(express.static("public"));

const welcomeMessageUtil = require("./util/welcomeMessage.js")


//console.log (__dirname);
// assignment: Create a route for the endpoint

app.get("/", (req, res) => {
    res.sendFile(__dirname +"/public/home.html");
});

//task: create route for the page "secondPage.html"

app.get("/secondPage", (req, res) => {
    res.sendFile(__dirname + "/public/secondPage.html");
});

//=====================================================

app.get("/welcomeMessage", (req, res) => {
    const clientName = req.query.user;
    const welcomeMessage = welcomeMessageUtil.getWelcomeMessage(clientName)
    //const welcomeMessage = welcomeMessageUtil.name;
    // console.log(welcomeMessage) //Sebastian
    res.send({data : welcomeMessage})
})

//=====================================================

const PORT = 8080;
app.listen(PORT, (error) => {
    if(error) {
        console.log ("Server failed to start.");
        return;
    } 
    console.log ("Server is running on port:", PORT);    
})