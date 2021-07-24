
const { RichEmbed } = require('discord.js')
const catfacts = require('cat-facts')
module.exports = {
    name : 'cfact',
    description: 'Returns a random cat fact.',
    usage:"*cfact",
    execute(msg) {
        let embed = new RichEmbed()
        .setDescription(`${catfacts.random()}`)
        .setColor("RANDOM")
        msg.channel.send(embed)

    }
}