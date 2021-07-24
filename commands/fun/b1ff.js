const talk = require("talk-like-a")

module.exports = {
    name: 'b1ff',
    description: 'does something dunno',
    execute(msg, client, args) {
        if(!args[0]) return;
    
        message.channel.send(talk.b1ff(args.join(" ")));
    }

}