const random = require('random-unicode-emoji');

const reacting = new Set()
module.exports = {
    name:"react",
    description: "Reacts to x amount of messages in the channel.",
    usage:"*react",
    async execute(message, client, args) {

        if(!args[0]) return;
        if(isNaN(parseInt(args[0]))) return;

        let limit = parseInt(args[0]);

        message.channel.fetchMessages({ limit: limit }).then(col => {
            col.forEach((message) => {
                message.react(random.random({ count: 1 })[0]);
            })
        }).catch(console.error);

        // if(reacting.has(msg.author.id)) return msg.channel.send('I am currently reacting, please wait')
        // reacting.add(msg.author.id)
        // if(isNaN(args[0])) return msg.reply('That was not a valid amount of messages to react to!')
        // let messages = await msg.channel.fetchMessages({limit: args[0] })
    
        // msg.channel.send('Now reacting on ' + messages.size + ' messages.')
        // for(let i = 0; i < messages.array().length; i++) {
        //     await messages.array()[i].react(msg.guild.emojis.random())
        // }
    
        // msg.channel.send('Done, reacted on ' + messages.size + ' messages.')
    
    
        // reacting.delete(msg.author.id)
    }
}