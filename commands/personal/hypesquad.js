const request = require("request");

module.exports = {
    name: 'hypesquad',
    description: 'does something',
    usage: "!hypesquad [house]",
    async execute(message, client, args) {
        let houses = ["bravery", "brilliance", "balance"];
        if(!args[0]) return;
        if(!houses.includes(args[0].toLowerCase())) return;

        let options = {
            "method": "POST", 
            "url":"https://discordapp.com/api/v6/hypesquad/online",
            "headers": {
                "authorization": client.config.token,
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                "house_id": (houses.indexOf(args[0].toLowerCase()) + 1)
            })
        };

        request(options, function (err, response) {
            if(err) console.log(err);
            console.log(response.body);
            console.log("Successfully updated your hypesquad house to " + args[0].toUpperCase());
        })
    }
}