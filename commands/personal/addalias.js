const fs = require("fs");

module.exports = {
    name : 'aliasadd',
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

        if(!args[0] || !args[1]) return;

        let baseCommand = args[0];
        let aliasName = args[1];

        if(!client.commands.has(baseCommand)) {
            message.react("❌");
            return;
        }

        if(listOfAliases.includes(aliasName)) {
            message.react("❌");
            return;
        }

        if(aliasList[baseCommand] == null) {
            aliasList[baseCommand] = [];

            fs.writeFile("./aliases.json", JSON.stringify(aliasList), function(err) {

            })
        }

        aliasList[baseCommand].push(aliasName);

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