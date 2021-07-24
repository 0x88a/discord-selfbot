let markdowns = ["brainfuck", "css", "yaml", "fix"]
module.exports = {
    name : 'ctext',
    description: 'Sends your message in a random color.',
    usage : '!ctext <text>',
    execute(msg, client, args) {
        if(!args[0]) return msg.reply('You need to type some text!')
        msg.channel.send(args.join(" "), { code: markdowns[Math.floor(Math.random() * markdowns.length)]})
    }
}