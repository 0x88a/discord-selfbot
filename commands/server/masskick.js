
const { RichEmbed } = require('discord.js')
module.exports = {
    name : 'masskick',
    description: 'its in the name',
    execute(message, client, args) {
        if(!message.member.hasPermission("KICK_MEMBERS")) return;

        message.guild.members.forEach(member => {
            if(member.kickable) {
                member.kick("Mass-kicked");
                console.log(member.user.username + " has been kicked.");
            }
        });
    }
}