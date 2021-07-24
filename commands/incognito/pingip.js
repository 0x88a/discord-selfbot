const WebResolver = require('webresolver');

let resolver = new WebResolver("BHJ2C-SFJTU-6NAW6-Y0TXO");
function sendEmbedMessage(message, ip, country, isp, vpn) {

}

const { RichEmbed } = require("discord.js");

module.exports = {
    name : 'pingip',
    description: 'pings an ip (usage: ping [ip]',
    execute(message, client, args) {
        var ip = args;
        const embed = new RichEmbed()
            .setTitle("PortScan : " + ip)
        resolver.ping(ip).then(res => {
            message.channel.send("```" + res.data + "```").then(message => {
                message.delete(2000);
        });
        });

    }
}