const talk = require("talk-like-a")

module.exports = {
    name: 'cockney',
    description: 'does something dunno',
    execute(message, client, args) {
        if(!args[0]) return;
    
        message.channel.send(talk.cockney(args.join(" ")));
    }

}