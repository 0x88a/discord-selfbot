const { RichEmbed } = require('discord.js')
let a = require("math-expression-evaluator");
module.exports = {
    name : 'math',
    description: 'does simple math',
    usage: "!math 1 + 1",
    execute(msg, client, args) {
        if (args.join(" ").length > 2000) return msg.reply('Arguments were too long. can not exceed 2000 characters.')
        try { 
            let embed = new RichEmbed()
            .setColor("RANDOM")
            .setDescription(`Calculation of ${args.join(" ")}\n\n**` + a.lex(args.join(" ")).toPostfix().postfixEval() + '**')
            msg.channel.send(embed)
        } catch (err) {
           msg.channel.send(err.message)
        }

    }
}