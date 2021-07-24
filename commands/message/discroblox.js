const { MessageEmbedField, RichEmbed } = require("discord.js");
const request = require("node-superfetch");

const rover = require('rover-api');

module.exports = {
    name : 'discroblox',
    description: 'shows other member avatar',
    execute(message, client, args) {

        let id = args[0] == null ? message.author.id : args[0];

        if(message.mentions.users.first()) id = message.mentions.users.first().id;

        rover(id).then(res => {
            console.log(res);

            message.channel.send(new RichEmbed().setColor("GREEN").setDescription("View this [roblox profile](https://www.roblox.com/users/" + res.robloxId + "/profile)"))

        }).catch((err) => {
            return message.channel.send(":x: Could not find the roblox account, or you are being ratelimited.");
        })

        // rover.get("https://users.roblox.com/v1/users/" + userId).then(res => {
        //     let embed = new RichEmbed()
            
        //     embed.setColor("GREEN");
        // }).catch(err => {
        //     return message.channel.send(":x: Could not find a user with that id or you are being ratelimited.");
        // })
    }
}
