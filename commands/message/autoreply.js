const alexa = require('alexa-bot-api');//package made by unque/dev and ctk warrior
const { MessageEmbedFooter } = require('discord.js');
var chatbot = new alexa("aw2plm")//free access key for ctk channel

let channel;
let author;
var ison = false;

module.exports = {
    name : 'autoreply',
    description: 'Realistic replies. autoreply <on/off>',
    execute(message, client, args) {
        if(args[0]) {
            if(args[0].toLowerCase() == "off") {
                client.autoreply.delete(client.user.id)
                message.react("✅");
                return;
            } else if(args[0].toLowerCase() == "on") {
                client.autoreply.set(client.user.id, "hi");
                message.react("✅")
                return;
            }
        }
    }
}