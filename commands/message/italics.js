
const { RichEmbed } = require('discord.js')
module.exports = {
    name : 'italics',
    description: 'Changes your text into italics',
    usage:"*italics <text>",
    execute(msg, args) {
        if(args.join(" ").length > 2000) return msg.reply('that message was too long, may not exceed 2048 characters.')

        msg.channel.send(`*${args.join(" ")}*`)       
    }
}