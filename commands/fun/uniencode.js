const talk = require("talk-like-a")

module.exports = {
    name: 'uniencode',
    description: 'does something dunno',
    execute(message, client, args) {
        if(!args[0]) return;
    
        message.channel.send(talk.uniencode(args.join(" ")));
    }

}