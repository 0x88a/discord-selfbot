
const { RichEmbed } = require('discord.js');
module.exports = {
    name:"token",
    description:"Sends the first part of mentioned users token.",
    usage:"*token",
    async execute(msg, _client, args) {
        let user = msg.mentions.users.first() || _client.users.get(args[0])
        if(!user) return msg.channel.send('You forgot to mention a user!')
        let embed = new RichEmbed()
        .setDescription(Buffer.from(user.id).toString("base64") + "")
        .setColor("RANDOM")
        msg.channel.send(embed)
      }
}