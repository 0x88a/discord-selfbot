const fs = require("fs");

module.exports = {
    name : 'addcommand',
    description: 'does stuff',
    execute(message, client, args) {

        let commandType = args[0]
        let commandName = args[1];

        if(!commandType) return;
        if(!commandName) return;

        let types = ["bomb", "embed", "message"];

        if(!types.includes(commandType.toLowerCase())) return;

        let aliasList;
        let commandData = [];
        let isFound = false;

        try {
            aliasList = JSON.parse(fs.readFileSync("./commands.json"));
        } catch (err) {
            console.log(err);
            return;
        }

        for(const data1 in aliasList) {
            let data = aliasList[data1];
            if(data) {
                if(data.name.toLowerCase() === commandName.toLowerCase()) {
                    isFound = true;
                }
                commandData.push(data);
            }
        }

        if(isFound) return;

        let createdCommandData = {};

        if(commandType.toLowerCase() === "bomb") {
            createdCommandData = {
                images: []
            }
        } else if(commandType.toLowerCase() === "embed") {
            createdCommandData = {
                title: "",
                description: ""
            }
        } else {
            createdCommandData = {
                message: ""
            }
        }

        commandData.push({
            name: commandName.toLowerCase(),
            type: commandType.toLowerCase(),
            data: createdCommandData
        });

        fs.writeFile("./commands.json", JSON.stringify(commandData), function(err) {
            if(err) {
                message.react("❌");
                return;
            }

            message.react("✅");
        })

        console.log(commandData);
        
    }
}