import express from "express";
const app = express();

app.use(express.json());
app.use(express.static("public"));

import * as pages from "./util/makePages.js";

//index
app.get("/", (req, res) => {
    res.send(pages.indexPage);
})

//gogin
app.get("/login", (req, res) => {
    res.send(pages.loginPage)
})


//week1

app.get("/nodeJS", (req, res) => {
    res.send(pages.nodeJSPage)
})

app.get("/git_commands", (req, res) => {
    res.send(pages.gitCommandsPage)
})

app.get("/clean_code", (req, res) => {
    res.send(pages.cleancodePage)
})




app.get("/variables_datatypes", (req, res) => {
    res.send(pages.variablesDataTypesPage)
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

app.get("/node_modules", (req, res) => {
    res.sendFile(__dirname + "/public/week2/nodeModules/node_modules.html")
})

//Week3
app.get("/url_anatomy", (req, res) => {
    res.sendFile(__dirname + "/public/week3/url_anatomy/url_anatomy.html")
})

app.get("/loops_js", (req, res) => {
    res.sendFile(__dirname + "/public/week3/loops_js/loops_js.html")
})

app.get("/servingExpress_inHtml", (req, res) => {
    res.sendFile(__dirname + "/public/week3/servingExpress_inHtml/servingExpress_inHtml.html")
})

app.get("/servingExpress_inHtml", (req, res) => {
    res.sendFile(__dirname + "/public/week3/servingExpress_inHtml/servingExpress_inHtml.html")
})

//Week4
app.get("/dates_times", (req, res) => {
    res.sendFile(__dirname + "/public/week4/dates_times/dates_times.html")
})

app.get("/fetch_basics", (req, res) => {
    res.sendFile(__dirname + "/public/week4/fetch_basics/fetch_basics.html")
})

app.get("/deployment", (req, res) => {
    res.sendFile(__dirname + "/public/week4/deployment/deployment.html")
})

//Week5
app.get("/commonJS_ESmodules", (req, res) => {
    res.sendFile(__dirname + "/public/week5/commonJS_ESmodules/commonJS_ESmodules.html")
})

app.get("/import_export_modules", (req, res) => {
    res.sendFile(__dirname + "/public/week5/import_export_modules/import_export_modules.html")
})

app.get("/xss", (req, res) => {
    res.sendFile(__dirname + "/public/week5/xss/xss.html")
})

//Week6

app.get("/fetch_client_server", (req, res) => {
    res.sendFile(__dirname + "/public/week6/fetch_client_server/fetch_client_server.html")
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