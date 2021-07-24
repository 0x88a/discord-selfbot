const { RichEmbed } = require("discord.js");
const request = require("node-superfetch");

module.exports = {
    name : 'reverse',
    description: 'reverses a fucking string',
    execute(message, client, args) {
        if(!args[0]) return;

        let str = args.join(" ");

        message.channel.send(str.split("").reverse().join(""));
    }
}