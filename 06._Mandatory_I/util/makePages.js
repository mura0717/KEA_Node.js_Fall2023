import { readPage, renderPage } from "./templateEngine.js";

//CSS Links
const globalCSS = `<link rel="stylesheet" href="/assets/css/global.css">`;
const sidebarCSS = `<link rel="stylesheet" href="/components/sidebar/sidebar.css">`;
const indexCSS = `<link rel="stylesheet" href="/pages/index/index.css">`;
const cleancodeCSS = `<link rel="stylesheet" href="/pages/week1/clean_code/clean_code.css">`;
const nodejsCSS = `<link rel="stylesheet" href="/pages/week1/node_js/node_js.css">`;

//CDN Links
const bootstrapCDN = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">`;
const bootstrapIcons= ``
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






