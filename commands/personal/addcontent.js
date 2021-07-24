const { ADDRGETNETWORKPARAMS } = require("dns");
const fs = require("fs");

module.exports = {
    name : 'addcontent',
    description: 'does stuff',
    execute(message, client, args) {

        let commandName = args[0];

        if(!commandName) return;

        let data;
        let aliasList;
        let commandData = {};
        let allCommandData = [];
        let index;
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
                    index = data1;
                    commandData = data;
                }
            }
            allCommandData.push(aliasList)
        }

        if(!isFound) return;

        args.shift();
        let commandContent = args;

        console.log(index);

        if(commandContent.length == 0) return;

        if(commandData.type === "bomb") {
            for(const arg in args) {
                commandData.data.images.push(args[arg]);
            }
        } else if(commandData.type === "embed") {
            let type = args[0];
            console.log(type);
            if(!type) return;
            if(!(["description", "title"].includes(type.toLowerCase()))) return;

            args.shift();

            let content = args;
            if(content.length == 0) return;

            console.log(commandData);

            commandData['data'][type] = args.join(" ");
        } else {
            commandData.message = args.join(" ");
        }
        
        // allCommandData[index][0] = commandData;
        allCommandData[index] = commandData;
        // console.log(allCommandData[index]);
        // console.log(allCommandData);

        console.log(allCommandData);

        fs.writeFile("./commands.json", JSON.stringify(allCommandData), function(err) {
            if(err) {
                message.react("❌");
                return;
            }
        })
    }
}