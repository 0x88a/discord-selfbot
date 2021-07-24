const shorten = require('node-url-shortener')
const { RichEmbed } = require('discord.js')
module.exports = {
    name : 'shorturl',
    description: 'shortens a url',
    execute(msg, client, args) {
        if(!args[0]) return msg.reply('you forgot an url!')

        shorten.short(args[0], function(err, url) {
            if(err) throw err;
            msg.channel.send(new RichEmbed().setDescription(url).setColor("RANDOM"))
        })
    }
}