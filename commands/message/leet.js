const leet = require('1337')
module.exports = {
    name : 'leet',
    description: 'Turns your message into leet speak.',
    usage : '!leet <text>',
    execute(msg, args) {
        if (!args[0]) return msg.reply('I need something to leet!')
        if (args.join(" ").length > 2048) return msg.reply('Text can not exceed 2048 characters.')
        msg.channel.send(`${leet(args.join(" "))}`)
    }
}