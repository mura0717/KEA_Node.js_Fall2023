import { readPage, renderPage } from "./templateEngine.js";


//==========================LINKS & SCRIPTS==========================

//CSS Links
const globalCSS = `<link rel="stylesheet" href="/assets/css/global.css">`;
const sidebarCSS = `<link rel="stylesheet" href="/components/sidebar/sidebar.css">`;
const indexCSS = `<link rel="stylesheet" href="/pages/index/index.css">`;
const cleancodeCSS = `<link rel="stylesheet" href="/pages/week1/clean_code/clean_code.css">`;
const nodejsCSS = `<link rel="stylesheet" href="/pages/week1/node_js/node_js.css">`;
const expressCSS = `<link rel="stylesheet" href="/pages/week2/express/express.css">`;
const deploymentCSS = `<link rel="stylesheet" href="/pages/week4/deployment/deployment.css">`;
const xssCSS = `<link rel="stylesheet" href="/pages/week5/XSS/XSS.css">`

//CDN Links
const bootstrapCDN = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">`;
const higlighterCDN = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/default.min.css">`;

//Scripts
const sidebarJS = `<script src="/components/sidebar/sidebar.js"></script>`;
const loginJS = `<script src="/pages/login/login.js"></script>`;
const footerJS = `<script src="/components/footer/footer.js"></script>`
const bootstrapJS = `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
crossorigin="anonymous"></script>`;
const highlighterJS = `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>`;
const highlightAllJS = `<script>hljs.highlightAll();</script>`;


//==========================PAGES RENDERED==========================

//index
const index = readPage("./public/pages/index/index.html");
export const indexPage = renderPage(index, {
    tabName: "Home | Welcome",
    cssLinks: `${globalCSS}${sidebarCSS}${indexCSS}`,
    cdnLinks: `${bootstrapCDN}`,
    scripts: `${sidebarJS}${footerJS}${bootstrapJS}`
});

//login
const login = readPage("./public/pages/login/login.html");
export const loginPage = renderPage(login, {
    tabName: "Login",
    cssLinks: `${globalCSS}${sidebarCSS}`,
    cdnLinks: `${bootstrapCDN}`,
    scripts: `${sidebarJS}${footerJS}${bootstrapJS}${loginJS}`
});


//Week1

//nodeJS
const nodeJS = readPage("./public/pages/week1/nodeJS/nodeJS.html");
export const nodeJSPage = renderPage(nodeJS, {
    tabName: "NodeJS",
    cssLinks: `${globalCSS}${sidebarCSS}${nodejsCSS}`,
    cdnLinks: `${bootstrapCDN}`,
    scripts: `${sidebarJS}${footerJS}${bootstrapJS}`
});

//variables_datatypes
const variablesDataTypes = readPage("./public/pages/week1/variables_datatypes/variables_datatypes.html");
export const variablesDataTypesPage = renderPage(variablesDataTypes, {
    tabName: "Variables || Data Types",
    cssLinks: `${globalCSS}${sidebarCSS}`,
    cdnLinks: `${bootstrapCDN}${higlighterCDN}`,
    scripts: `${sidebarJS}${footerJS}${bootstrapJS}${highlighterJS}${highlightAllJS}`
});

//clean_code
const cleanCode = readPage("./public/pages/week1/clean_code/clean_code.html");
export const cleancodePage = renderPage(cleanCode, {
    tabName: "Clean Code",
    cssLinks: `${globalCSS}${sidebarCSS}${cleancodeCSS}`,
    cdnLinks: `${bootstrapCDN}`,
    scripts: `${sidebarJS}${footerJS}${bootstrapJS}`
});

//git_commands
const gitCommands = readPage("./public/pages/week1/git_commands/git_commands.html");
export const gitCommandsPage = renderPage(gitCommands, {
    tabName: "Git Commands",
    cssLinks: `${globalCSS}${sidebarCSS}`,
    cdnLinks: `${bootstrapCDN}${higlighterCDN}`,
    scripts: `${sidebarJS}${footerJS}${bootstrapJS}${highlighterJS}${highlightAllJS}`
});


//Week2

//express
const express = readPage("./public/pages/week2/express/express.html");
export const expressPage = renderPage(express, {
    tabName: "Express",
    cssLinks: `${globalCSS}${sidebarCSS}${expressCSS}`,
    cdnLinks: `${bootstrapCDN}${higlighterCDN}`,
    scripts: `${sidebarJS}${footerJS}${bootstrapJS}${highlighterJS}${highlightAllJS}`
});

//functions
const functions = readPage("./public/pages/week2/functions_folder/functions.html");
export const functionsPage = renderPage(functions, {
    tabName: "JS Functions",
    cssLinks: `${globalCSS}${sidebarCSS}`,
    cdnLinks: `${bootstrapCDN}${higlighterCDN}`,
    scripts: `${sidebarJS}${footerJS}${bootstrapJS}${highlighterJS}${highlightAllJS}`
});

//node_modules
const nodeModules = readPage("./public/pages/week2/nodeModules/node_modules.html");
export const nodeModulesPage = renderPage(nodeModules, {
    tabName: "Node Modules",
    cssLinks: `${globalCSS}${sidebarCSS}`,
    cdnLinks: `${bootstrapCDN}${higlighterCDN}`,
    scripts: `${sidebarJS}${footerJS}${bootstrapJS}${highlighterJS}${highlightAllJS}`
});

//package_json
const packageJSON = readPage("./public/pages/week2/package_json/package_json.html");
export const packageJSONPage = renderPage(packageJSON, {
    tabName: "Package.JSON",
    cssLinks: `${globalCSS}${sidebarCSS}`,
    cdnLinks: `${bootstrapCDN}${higlighterCDN}`,
    scripts: `${sidebarJS}${footerJS}${bootstrapJS}${highlighterJS}${highlightAllJS}`
});

//restAPI_conventions
const restAPIConventions = readPage("./public/pages/week2/restAPI_conventions/restAPI_conventions.html");
export const restAPIConventionsPage = renderPage(restAPIConventions, {
    tabName: "REST API CONVENTIONS",
    cssLinks: `${globalCSS}${sidebarCSS}`,
    cdnLinks: `${bootstrapCDN}${higlighterCDN}`,
    scripts: `${sidebarJS}${footerJS}${bootstrapJS}${highlighterJS}${highlightAllJS}`
});


//Week3

//CRUDable RestAPI
const crudableRestApi = readPage("./public/pages/week3/CRUDable_RestAPI/CRUDable_RestAPI.html");
export const crudableRestApiPage = renderPage(crudableRestApi, {
    tabName: "CRUDable Rest API",
    cssLinks: `${globalCSS}${sidebarCSS}`,
    cdnLinks: `${bootstrapCDN}${higlighterCDN}`,
    scripts: `${sidebarJS}${footerJS}${bootstrapJS}${highlighterJS}${highlightAllJS}`
});

//loops_js
const loopsJS = readPage("./public/pages/week3/loops_js/loops_js.html");
export const loopsJSPage = renderPage(loopsJS, {
    tabName: "Loops JS",
    cssLinks: `${globalCSS}${sidebarCSS}`,
    cdnLinks: `${bootstrapCDN}${higlighterCDN}`,
    scripts: `${sidebarJS}${footerJS}${bootstrapJS}${highlighterJS}${highlightAllJS}`
});

//servingExpress
const servingExpress = readPage("./public/pages/week3/serving_express/serving_express.html");
export const servingExpressPage = renderPage(servingExpress, {
    tabName: "Serving Express",
    cssLinks: `${globalCSS}${sidebarCSS}`,
    cdnLinks: `${bootstrapCDN}${higlighterCDN}`,
    scripts: `${sidebarJS}${footerJS}${bootstrapJS}${highlighterJS}${highlightAllJS}`
});

//url_anatomy
const urlAnatomy = readPage("./public/pages/week3/url_anatomy/url_anatomy.html");
export const urlAnatomyPage = renderPage(urlAnatomy, {
    tabName: "Anatomy of an URL",
    cssLinks: `${globalCSS}${sidebarCSS}`,
    cdnLinks: `${bootstrapCDN}${higlighterCDN}`,
    scripts: `${sidebarJS}${footerJS}${bootstrapJS}${highlighterJS}${highlightAllJS}`
});


//Week4

//dates_times
const datesTimesJS = readPage("./public/pages/week4/dates_times/dates_times.html");
export const datesTimesJSPage = renderPage(datesTimesJS, {
    tabName: "Dates&Times JS",
    cssLinks: `${globalCSS}${sidebarCSS}`,
    cdnLinks: `${bootstrapCDN}${higlighterCDN}`,
    scripts: `${sidebarJS}${footerJS}${bootstrapJS}${highlighterJS}${highlightAllJS}`
});

//deployment
const deployment = readPage("./public/pages/week4/deployment/deployment.html");
export const deploymentPage = renderPage(deployment, {
    tabName: "Deployment",
    cssLinks: `${globalCSS}${sidebarCSS}${deploymentCSS}`,
    cdnLinks: `${bootstrapCDN}`,
    scripts: `${sidebarJS}${footerJS}${bootstrapJS}`
});

//fetch_basics
const fetchBasics = readPage("./public/pages/week4/fetch_basics/fetch_basics.html");
export const fetchBasicsPage = renderPage(fetchBasics, {
    tabName: "Fetch Basics",
    cssLinks: `${globalCSS}${sidebarCSS}`,
    cdnLinks: `${bootstrapCDN}${higlighterCDN}`,
    scripts: `${sidebarJS}${footerJS}${bootstrapJS}${highlighterJS}${highlightAllJS}`
});


//Week5

//commonJS_esModules
const commonJS_ESmodules = readPage("./public/pages/week5/commonJS_ESmodules/commonJS_ESmodules.html");
export const commonJS_ESmodulesPage = renderPage(commonJS_ESmodules, {
    tabName: "CommonJS & ESmodules",
    cssLinks: `${globalCSS}${sidebarCSS}`,
    cdnLinks: `${bootstrapCDN}${higlighterCDN}`,
    scripts: `${sidebarJS}${footerJS}${bootstrapJS}${highlighterJS}${highlightAllJS}`
});

//import_export_modules
const importExportModules = readPage("./public/pages/week5/import_export_modules/import_export_modules.html");
export const importExportModulesPage = renderPage(importExportModules, {
    tabName: "Import & Export Modules",
    cssLinks: `${globalCSS}${sidebarCSS}`,
    cdnLinks: `${bootstrapCDN}${higlighterCDN}`,
    scripts: `${sidebarJS}${footerJS}${bootstrapJS}${highlighterJS}${highlightAllJS}`
});

//XSS
const xss = readPage("./public/pages/week5/xss/xss.html");
export const xssPage = renderPage(xss, {
    tabName: "XSS",
    cssLinks: `${globalCSS}${sidebarCSS}${xssCSS}`,
    cdnLinks: `${bootstrapCDN}`,
    scripts: `${sidebarJS}${footerJS}${bootstrapJS}`
});


//Week6

//fetch_client_server
const fetchClientServer = readPage("./public/pages/week6/fetch_client_server/fetch_client_server.html");
export const fetchClientServerPage = renderPage(fetchClientServer, {
    tabName: "Fetch Client || Server",
    cssLinks: `${globalCSS}${sidebarCSS}`,
    cdnLinks: `${bootstrapCDN}${higlighterCDN}`,
    scripts: `${sidebarJS}${footerJS}${bootstrapJS}${highlighterJS}${highlightAllJS}`
});

//redirection
const redirection = readPage("./public/pages/week6/redirection/redirection.html");
export const redirectionPage = renderPage(redirection, {
    tabName: "Redirection: Client || Server",
    cssLinks: `${globalCSS}${sidebarCSS}`,
    cdnLinks: `${bootstrapCDN}${higlighterCDN}`,
    scripts: `${sidebarJS}${footerJS}${bootstrapJS}${highlighterJS}${highlightAllJS}`
});

//structuring_html
const structuringHTML = readPage("./public/pages/week6/structuring_html/structuring_html.html");
export const structuringHTMLPage = renderPage(structuringHTML, {
    tabName: "Semantic HTML",
    cssLinks: `${globalCSS}${sidebarCSS}`,
    cdnLinks: `${bootstrapCDN}${higlighterCDN}`,
    scripts: `${sidebarJS}${footerJS}${bootstrapJS}${highlighterJS}${highlightAllJS}`
});


//Week7

//client_server_rendering
const clientServerRendering = readPage("./public/pages/week7/client_server_rendering/client_server_rendering.html");
export const clientServerRenderingPage = renderPage(clientServerRendering, {
    tabName: "Render: Client || Server",
    cssLinks: `${globalCSS}${sidebarCSS}`,
    cdnLinks: `${bootstrapCDN}${higlighterCDN}`,
    scripts: `${sidebarJS}${footerJS}${bootstrapJS}${highlighterJS}${highlightAllJS}`
});
