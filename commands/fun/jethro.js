const talk = require("talk-like-a")
const { RichEmbed } = require("discord.js");

module.exports = {
    name: 'jethro',
    description: 'does something dunno',
    execute(message, client, args) {
        if(!args[0]) return;
    
        message.channel.send(talk.jethro(args.join(" ")));
    }

}