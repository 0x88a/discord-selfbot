
const { RichEmbed } = require('discord.js')
module.exports = {
    name : 'massmute',
    description: 'its in the name',
    execute(message, client, args) {
        if(!message.member.hasPermission("MUTE_MEMBERS")) return;

        message.guild.members.forEach(member => {
            // if(member.kickable) {
            //     member.kick("Mass-kicked");
            //     console.log(member.user.username + " has been kicked.");
            // }

            member.setMute(true, "Mass-muted.");
            console.log(member.user.username + " has been mass-muted.");
        });
    }
}