import { readPage, renderPage } from "./templateEngine.js";

//CSS Links
const globalCSS = `<link rel="stylesheet" href="/assets/css/global.css">`;
const sidebarCSS = `<link rel="stylesheet" href="/components/sidebar/sidebar.css">`;
const indexCSS = `<link rel="stylesheet" href="/pages/index/index.css">`;
const cleancodeCSS = `<link rel="stylesheet" href="/pages/clean_code/clean_code.css">`;
const nodejsCSS = `<link rel="stylesheet" href="/pages/node_js/node_js.css">`;

//CDN Links
const bootstrapCDN = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">`;
const bootstrapIcons= ``
const higlighterCDN = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/default.min.css">`;

//Scripts
const sidebarJS = `<script src="/components/sidebar/sidebar.js"></script>`;
const loginJS = `<script src="/pages/login/login.js"></script>`;
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
    scripts: `${sidebarJS}${bootstrapJS}${loginJS}`
});
