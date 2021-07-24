
const { RichEmbed, User } = require('discord.js')
module.exports = {
    name : 'massunban',
    description: 'its in the name',
    execute(message, client, args) {
        if(!message.member.hasPermission("BAN_MEMBERS")) return;

        message.guild.fetchBans().then(bans => {
            bans.forEach((ban) => {
                if((typeof ban) === User) {
                    message.guild.unban(ban.id);
                } else {
                    message.guild.unban(ban.user.id);
                }
            })
        }).catch(console.error);
    }
}