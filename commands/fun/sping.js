const { RichEmbed } = require('discord.js') 
module.exports = {
    name:"sping",
    description:"Pings mentioned user in every channel in the server and deletes the message.",
    usage:"*sping @user",
    async execute(msg, client, args) {
        let user = msg.mentions.users.first()

        if(!user) return msg.channel.send('you forgot to mention a user!')
      
        let channels = msg.guild.channels.filter(c => c.type === "text").array()
        for(let i = 0; i < channels.length; i++) {
      
        let m = await client.channels.get(channels[i].id).send(user.toString())
        m.delete()
      }
    }
}