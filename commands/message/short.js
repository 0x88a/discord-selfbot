const { RichEmbed } = require("discord.js");

module.exports = {
    name:"short",
    usage:"*short <url>",
    description:"Shortens the URL and returns the shortened url.",
    execute(msg, args) {
        if(!args[0]) return msg.reply('you forgot an url!')

        shorten.short(args[0], function(err, url) {
            if(err) throw err;
            msg.channel.send(new RichEmbed().setDescription(url).setColor("RANDOM"))
        })
    }
}