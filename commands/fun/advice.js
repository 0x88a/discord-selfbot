const request = require('request')
const { RichEmbed } = require('discord.js')
module.exports = {
    name : 'advice',
    description: 'Returns a piece of advice in an embed.',
    usage: "advice <message>",
    execute(msg) {
        let advice = request("http://api.adviceslip.com/advice", function(err, res, body) {
            try {
                let cnj = JSON.parse(body)
                msg.channel.send(new RichEmbed().setDescription(cnj.slip.advice).setColor("RANDOM"))
            } catch (e) {
                console.log(e)
            }
        });
    }
}