const WebResolver = require('webresolver');

let resolver = new WebResolver("BHJ2C-SFJTU-6NAW6-Y0TXO");
function sendEmbedMessage(message, ip, country, isp, vpn) {

}

const { RichEmbed } = require("discord.js");

module.exports = {
    name : 'portscan',
    description: 'scans for open ports (usage: portscan [ip]',
    execute(message, client, args) {
        const embed = new RichEmbed()
            embed.setTitle("Portscan : " + args)
            embed.setColor(15883870)
        resolver.portscan(args).then(res => {

            var ports = res.data.ports;
            var length = res.data.ports.length;
            for (var i = 0; i < length; i++) {
                var obj = ports[i];
                embed.addField("Port : " + obj.port + " | Service : " + obj.service, "Open: " + obj.open, true);
            }
        }).then( epic => {
            message.channel.send({embed})
        });

    }
}
