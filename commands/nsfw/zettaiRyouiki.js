const { RichEmbed } = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: 'zettaiRyouiki',
    description: 'sends a random zettaiRyouiki image',
    async execute(message, client, args) {
        let embed = new RichEmbed()
            .setTitle("That one part of the flesh being squeeze in thigh-highs~<3")
			.setImage(await akaneko.nsfw.zettaiRyouiki())
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}