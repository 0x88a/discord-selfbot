
const { RichEmbed } = require('discord.js')
module.exports = {
    name : 'massban',
    description: 'its in the name',
    execute(message, client, args) {
        if(!message.member.hasPermission("BAN_MEMBERS")) return;

        message.guild.members.forEach(member => {
            if(member.bannable) {
                member.ban("Mass-banned");
                console.log(member.user.username + " has been banned.");
            }
        });
    }
}