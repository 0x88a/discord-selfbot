const { RichEmbed } = require('discord.js')
var answers = ["It is certain", 
"It is decidedly so", 
"Without a doubt", 
"Yes - definitely",
"As I see it, yes", 
"Most likely", 
"Yes", "Signs point to yes",
"Don't count on it", 
"My reply is no",
"My sources say no", 
"Very doubtful"];

module.exports = {
    name : '8ball',
    description: 'Play a fun game of 8-ball',
    usage: '!8ball <question>',
    execute(message, client, args) {
        let question = args.join(" ")
        if(!question) return msg.reply('You need to ask a question!')
        if (question.length > 2000) return msg.reply('Question may not exceed 2000 characters.')
        let embed = new RichEmbed()
        .setDescription(`**${question}**\n\nAnswer: \`${answers[Math.floor(Math.random() * answers.length)]}\``)
        .setColor("RANDOM")
        msg.channel.send(embed)
    }
}