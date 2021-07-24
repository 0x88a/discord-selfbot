const fs = require("fs");

module.exports = {
    name : 'aliaslist',
    description: 'does stuff',
    execute(message, client, args) {

        let aliasList;

        try {
            aliasList = JSON.parse(fs.readFileSync("./aliases.json"));
        } catch (err) {
            return;
        }

        let formattedMessage = "";

        for(const key in aliasList) {
            formattedMessage += key.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') + " - ";
            aliasList[key].forEach((i) => {
                formattedMessage += i + ", "
            })
        }

        message.edit("```\n" + formattedMessage + "\n```");

        console.log(formattedMessage);

        console.log(aliasList);
    }
}