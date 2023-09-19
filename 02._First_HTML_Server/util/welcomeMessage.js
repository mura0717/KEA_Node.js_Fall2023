
const welcomeMessageJson = require("./welcomeMessage.json");

//console.log(welcomeMessageJson);

function getWelcomeMessage(clientName){
    if (!clientName) {
        // res.send({ data: "Hello Stranger"})
        return welcomeMessageJson.noNameWelcomeMessage;
    } else {
        //res.send({ data: `Welcome to the site, ${clientName}!`});
        return welcomeMessageJson.nameWelcomeMessage.replace("${clientName}", clientName);
    }
};

module.exports = {
    getWelcomeMessage,
    name: "Sebastian"
};