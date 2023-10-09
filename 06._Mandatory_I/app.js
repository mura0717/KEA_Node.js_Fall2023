//==============EXPRESS SETUP=================

import express from "express";
const app = express();

app.use(express.json());
app.use(express.static("public"));

//==============READ PAGES===================

import * as pages from "./util/makePages.js";

//================HTML=======================

//index
app.get("/", (req, res) => {
    res.send(pages.indexPage);
})

//signup
app.get("/signup", (req, res) => {
    res.send(pages.signupPage)
})

//login
app.get("/login", (req, res) => {
    res.send(pages.loginPage)
})

//admin
app.get("/admin", (req, res) => {
    res.send(pages.adminPage)
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
    res.send(pages.restAPIConventionsPage)
})

app.get("/functions", (req, res) => {
    res.send(pages.functionsPage)
})

app.get("/express", (req, res) => {
    res.send(pages.expressPage)
})

app.get("/package_json", (req, res) => {
    res.send(pages.packageJSONPage)
})

app.get("/node_modules", (req, res) => {
    res.send(pages.nodeModulesPage)
})

//Week3
app.get("/url_anatomy", (req, res) => {
    res.send(pages.urlAnatomyPage)
})

app.get("/loops_js", (req, res) => {
    res.send(pages.loopsJSPage)
})

app.get("/CRUDable_RestAPI", (req, res) => {
    res.send(pages.crudableRestApiPage)
})

app.get("/serving_express", (req, res) => {
    res.send(pages.servingExpressPage)
})

//Week4
app.get("/dates_times", (req, res) => {
    res.send(pages.datesTimesJSPage)
})

app.get("/fetch_basics", (req, res) => {
    res.send(pages.fetchBasicsPage)
})

app.get("/deployment", (req, res) => {
    res.send(pages.deploymentPage)
})

//Week5
app.get("/commonJS_ESmodules", (req, res) => {
    res.send(pages.commonJS_ESmodulesPage)
})

app.get("/import_export_modules", (req, res) => {
    res.send(pages.importExportModulesPage)
})

app.get("/xss", (req, res) => {
    res.send(pages.xssPage)
})

//Week6

app.get("/fetch_client_server", (req, res) => {
    res.send(pages.fetchClientServerPage)
})

app.get("/redirection", (req, res) => {
    res.send(pages.redirectionPage)
})

app.get("/structuring_html", (req, res) => {
    res.send(pages.structuringHTMLPage)
})

//Week7
app.get("/client_server_rendering", (req, res) => {
    res.send(pages.clientServerRenderingPage)
})

//==============CONNECTION===================
const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, (error) => {
    if(error) {
        console.log("Server failed to start.");
        return;
    }
    console.log("Server is running on: " + PORT);
});

