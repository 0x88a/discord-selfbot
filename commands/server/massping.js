
const { RichEmbed } = require('discord.js')
module.exports = {
    name : 'massping',
    description: 'its in the name',
    execute(message) {
        message.channel.send("<@" + message.guild.id + ">");
    }
}