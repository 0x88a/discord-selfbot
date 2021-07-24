module.exports = {
    name : 'dm',
    description: 'sends dm to user',
    execute(msg, client, args) {
        let str = args.join(" ")
        if(str.length > 2000) return msg.reply('Your message can not exceed 2000 characters.')
        if(!str) return msg.reply('I need a message to send!')
        let user = msg.mentions.users.first()
        if(!user) return msg.reply('You forgot to mention a user.')
        user.send(str.slice(args[0].length).trimLeft())
    }
}