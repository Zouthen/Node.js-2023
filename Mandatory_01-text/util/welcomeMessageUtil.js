const welcomeMessageJson = require("./welcomeMessage.json");

//console.log(welcomeMessageJson);

function getWelcomeMessage(clientName) {
    if (!clientName) {
        return welcomeMessageJson.noNameWelcomeMessage;
    } else {
        return welcomeMessageJson.nameWelcomeMessage.replace("$clientName", clientName);
    }
};

module.exports = {
    getWelcomeMessage,
    name: "Arthas"
};