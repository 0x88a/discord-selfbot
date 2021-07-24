const emoji = require('discord-emoji-convert');

module.exports = {
    name: 'emojify',
    description: 'converts text to emojis',
    execute(message, client, args) {

        if(!args[0]) return;

        var text = args.join(" ");
        message.channel.send(emoji.convert(text));

    }
}