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

//connection
const PORT = 8080;
app.listen(PORT, (error) => {
    if(error) {
        console.log("Server failed to start.");
        return;
    }
    console.log("Server is running on: " + PORT);
});