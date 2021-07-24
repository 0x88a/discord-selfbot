const hastebin = require("hastebin-gen");

// You can change the extension by setting the extension option

module.exports = {
    name : 'hastebin',
    description: 'uploads text to hastebin',
    execute(message, client, args) {
        var text = args;
        hastebin(text, { extension: "txt" }).then(haste => {
            message.channel.send(haste);
            console.log(haste)
        }).catch(error => {

            message.channel.send("```Error: " + error + "```").then(message => {
                message.delete(1000);
            });
        });


    }
}