const WebResolver = require('webresolver');
let resolver = new WebResolver("BHJ2C-SFJTU-6NAW6-Y0TXO");
const { RichEmbed } = require("discord.js");
module.exports = {
    name: 'dns',
    description: 'gets information from a domain (usage: domaininfo [url]',
    execute(message, client, args) {
        let url = args[0];
        let embed = new RichEmbed()
            .setTitle("DNS Records for: " + url)
            .setColor(14699596);
        resolver.dns(url).then(res => {


            var records = res.data.records;
            for (var i = 0; i < res.data.records.length; i++) {
                var obj = records[i];
                if (obj.ip) {
                    embed.addField(obj.ip, obj.server ? obj.server : "none", true);
                }
            }


            message.channel.send({embed});
        });

    }
}
