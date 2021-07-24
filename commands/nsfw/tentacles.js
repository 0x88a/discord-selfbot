const { RichEmbed } = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: 'tentacles',
    description: 'sends a random tentacles image',
    async execute(message, client, args) {
        let embed = new RichEmbed()
            .setTitle("I'm sorry but, why do they look like intestines?")
			.setImage(await akaneko.nsfw.tentacles())
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}