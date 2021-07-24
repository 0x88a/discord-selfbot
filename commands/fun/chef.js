const talk = require("talk-like-a")

module.exports = {
    name: 'chef',
    description: 'does something dunno',
    execute(message, client, args) {
        if(!args[0]) return;
    
        message.channel.send(talk.chef(args.join(" ")));
    }

}