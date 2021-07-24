const talk = require("talk-like-a")

module.exports = {
    name: 'ky00te',
    description: 'does something dunno',
    execute(message, client, args) {
        if(!args[0]) return;
    
        message.channel.send(talk.ky00te(args.join(" ")));
    }

}