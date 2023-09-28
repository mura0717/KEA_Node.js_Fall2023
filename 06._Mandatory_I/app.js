const express = require("express")
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/public/'));

//index
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index/index.html")
})

//sidebar
app.get("/sidebar", (req, res) => {
    res.sendFile(__dirname + "/public/sidebar/sidebar.html");
});

//Week1
app.get("/nodeJS", (req, res) => {
    res.sendFile(__dirname + "/public/week1/nodeJS/nodeJS.html")
})

app.get("/variables_datatypes", (req, res) => {
    res.sendFile(__dirname + "/public/week1/variables_datatypes/variables_datatypes.html")
})

app.get("/clean_code", (req, res) => {
    res.sendFile(__dirname + "/public/week1/clean_code/clean_code.html")
})

app.get("/git_commands", (req, res) => {
    res.sendFile(__dirname + "/public/week1/git_commands/git_commands.html")
})

//Week2

app.get("/restAPI_conventions", (req, res) => {
    res.sendFile(__dirname + "/public/week2/restAPI_conventions/restAPI_conventions.html")
})

app.get("/functions", (req, res) => {
    res.sendFile(__dirname + "/public/week2/functions_folder/functions.html")
})

app.get("/express", (req, res) => {
    res.sendFile(__dirname + "/public/week2/express/express.html")
})

app.get("/package.json", (req, res) => {
    res.sendFile(__dirname + "/public/week2/packageJSON/package.json.html")
})

//connection
const PORT = 8080;
app.listen(PORT, (error) => {
    if(error) {
        console.log("Server failed to start.");
        return;
    }
    console.log("Server is running on: " + PORT);
});