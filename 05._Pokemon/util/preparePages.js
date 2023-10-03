import { readPage, renderPage } from "./templateEngine.js";

const frontPage = readPage("./public/pages/frontpage/frontpage.html");
export const frontpagePage = renderPage(frontPage, 
    {
        tabTitle: "Pokemon | Welcome"
    });

const battle = readPage("./public/pages/battle/battle.html");
export const battlePage = renderPage(battle, 
    {
        tabTitle: "Pokemon | Battle",
        cssLinks: `<link rel="stylesheet" href="/pages/battle/battle.css"`
    });

const contact = readPage("./public/pages/contact/contact.html");
export const contactPage = renderPage(contact);