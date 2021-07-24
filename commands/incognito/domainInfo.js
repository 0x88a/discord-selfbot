const WebResolver = require('webresolver');

let resolver = new WebResolver("BHJ2C-SFJTU-6NAW6-Y0TXO");
const { RichEmbed } = require("discord.js");
module.exports = {
    name : 'domaininfo',
    description: 'gets information from a domain (usage: domaininfo [url]',
    execute(message, client, args) {
        var url = args;
        const embed = new RichEmbed()
            .setTitle("Domain Info : " + url)
            .setColor(15883870)

        resolver.domainInfo(url).then(res => {
            var ip_history = res.data.ip_history;
            var subdomains = res.data.subdomains;
            var length = 0;
            var length2 = 0;
            if (ip_history != null) {
                length = res.data.ip_history.length
            }
            if (subdomains.length != null) {
                legnth2 = res.data.subdomains.length;
            }
            if (length >= 25) {
                length = 11;
            }
            if (length2 >= 25) {
                length2 = 11;
            }
            if (ip_history != null) {
                for (var i = 0; i < length; i++) {
                    var obj = ip_history[i];
                    embed.addField("IP History", obj.ip_address, true);
                }
            }
            else {
                embed.addField("IP History", "None", true);
            }
            for (var i = 0; i < length2; i++) {
                var obj = subdomains[i];
                embed.addField("SubDomain", obj, true);
            }


        }).then( epic => {
            message.channel.send({embed})
        });

    }
}