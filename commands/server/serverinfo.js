const dateFormat = require('dateformat');
const stripIndents = require('common-tags').stripIndents;

const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
module.exports = {
    name : 'serverinfo',
    description: 'displays server info in an embedded message',
    usage: "!serverinfo",
    execute(message, client, args) {
        if (!message.guild) return message.channel.send("Command must be sent in a server").then(msg => {msg.delete(1000)});

        const millis = new Date().getTime() - message.guild.createdAt.getTime();
        const days = millis/100/60/60/24;
        const verification = ['None', 'Low', 'Medium', 'Insane'];

        console.log(message.guild);
        var embed = new discord.RichEmbed()
            .setTitle("Server Info: " + message.guild.name, true);
        embed.addField("Created On", dateFormat(message.guild.createdAt), true);
        embed.addField("Days Since", days.toFixed(0), true);
        embed.addField("Member Count", message.guild.memberCount, true);
        embed.addField("Role Count", message.guild.roles.size, true);
        embed.addField("Server Region", message.guild.region, true);
        if (message.guild.iconURL != null)
            embed.setThumbnail(message.guild.iconURL);
        message.channel.send({embed});
    }
}