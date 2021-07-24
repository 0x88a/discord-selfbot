const { RichEmbed } = require('discord.js')
module.exports = {
    name: 'channels',
    description: 'displays all channels (Including hidden channels)',
    usage: "!channels",
    execute(msg) {
        console.log("executed");
        if(msg.guild.channels.map(r => r.name).join("").length > 2000) return msg.reply('This server has too many channels to display! (' + msg.guild.channels.size + ' roles)')

        let embed = new RichEmbed()
        .setDescription(msg.guild.channels.map(r => r.name).join(", "))  
        .setColor("RANDOM")
        msg.channel.send(embed)
    }


}