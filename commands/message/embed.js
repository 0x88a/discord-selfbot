const { RichEmbed } = require('discord.js')

module.exports = {
    name:"embed",
    description: "Sends your message in an embed.",
    usage:"*embed message",
    execute(message, client, args) {
        if(!args[0]) return;
        if(args.join(" ").length > 2000) return message.channel.send('Text may not exceed 2000 characters.')

        let embed = new RichEmbed()
        .setDescription(args.join(" "))
        .setColor(data.color)
        message.channel.send(embed)
    
    }
}