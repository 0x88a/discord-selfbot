const { RichEmbed } = require("discord.js");

module.exports = {
    name : 'uptime',
    description: 'Get the uptime of the selfbot',
    execute(message, client, args) {


                let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
                const thebotsuptime = new RichEmbed()
                .setTitle("Bot's Uptime")
            .setDescription(`**${days}** days, **${hours}** hours and **${minutes}** minutes.`)
            .setColor('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6))
            .setTimestamp()
            message.channel.send(thebotsuptime)

    }
}