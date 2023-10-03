import fs from "fs";

//turn the html file into string
export function readPage(filePath){
    return fs.readFileSync(filePath).toString();
}

export function renderPage(pageBody, config){
    const sidebar = readPage("./public/components/sidebar/sidebar.html")
    .replace("$TAB_NAME", config.tabName || "NodeJS Mandatory I")
    .replace("$CSS_LINKS", config.cssLinks || "")
    .replace("$CDN_LINKS", config.cdnLinks || "")
    .replace("$SCRIPTS", config.scripts || "");
    const footer = readPage("./public/components/footer/footer.html");

    return sidebar + pageBody + footer;

}