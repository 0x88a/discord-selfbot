const talk = require("talk-like-a")

module.exports = {
    name: 'censor',
    description: 'does something dunno',
    execute(message, client, args) {
        if(!args[0]) return;
    
        message.channel.send(talk.censor(args.join(" ")));
    }

}