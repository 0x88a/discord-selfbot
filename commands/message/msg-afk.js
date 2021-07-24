const ms = require('ms')
const { RichEmbed } = require('discord.js')
module.exports = {
    name : 'timed-spam',
    description: 'Sends a message after x amount of time.',
    usage:"*msg-afk 5s hello",
    execute(msg, client, args) {
        if(!args[0]) return msg.reply('You forgot to specify how many seconds you should wait until sending the message!')

        let time = ms(args[0])
        if(!time || time < 1000) return msg.reply('That was not a valid time, please enter something like `2s` `1m` etc..')
        let message = args.join(" ").slice(args[0].length)
    
        if(!message) return msg.reply('You forgot a message to send!')
    
        setInterval(() => {
            msg.channel.send(message)
        }, time); 
    }
}