const translate = require('translate-google');
const { on } = require('process');
const { timingSafeEqual } = require('crypto');
const { Message } = require('discord.js');
let toggle = false;
let author;
let lang;
let channel;

module.exports = {
    name : 'untranslate',
    description: 'untranslates all messages. untranslate <language>',
    execute(msg, client, args) {
        if (!msg) return;
        if (author != undefined && msg.author.id === author) return;
        if (toggle && msg.channel.id != channel) return;
        if (!toggle && msg.content.includes("untranslate") === false) return;

        if(msg.content > 2000) return msg.reply('text may not exceed 2000 chars.')
        if (toggle && msg.content.includes("untranslate") != true && msg.author.id != author) {
            translate(msg.content, { to: lang}).then(res => {
                msg.channel.send(res)
            }).catch(e => console.log(e))
        } else if (args && msg.content.includes("untranslate")) {
            if (args[1] === "on") {
                toggle = true;
                channel = msg.channel.id;
                lang = args[0];
                author = msg.author.id
                msg.channel.send(`Un-translate | ${args[0]} | on`);
            } else if (args[0] === "off"){
                toggle = false;
                msg.channel.send(`Un-translate | Offline`);
            }
        }

    }
}