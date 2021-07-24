const fs = require("fs");
const aliaslist = require("./aliaslist");

module.exports = {
    name : 'removealias',
    description: 'does stuff',
    execute(message, client, args) {

        let aliasList;
        let listOfAliases = [];

        try {
            aliasList = JSON.parse(fs.readFileSync("./aliases.json"));
        } catch (err) {
            return;
        }

        for(const key in aliasList) {
            aliasList[key].forEach((i) => {
                listOfAliases.push(i);
            })
        }

        if(!args[0]) return;

        let aliasName = args[0];

        if(!listOfAliases.includes(aliasName)) {
            message.react("❌");
            return;
        }

        for(const key in aliasList) {
            if(aliasList[key].includes(aliasName)) {
                aliasList[key].splice(aliasList[key].indexOf(aliasName))
            }
        }

        fs.writeFile("./aliases.json", JSON.stringify(aliasList), function(err) {
            if(err) {
                message.react("❌");
                return;
            }

            message.react("✅");
        })

        console.log(listOfAliases);
    }
}