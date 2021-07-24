const { RichEmbed } = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: 'masturbation',
    description: 'sends a random masturbation image',
    async execute(message, client, args) {
        let embed = new RichEmbed()
            .setTitle("Solo Queue in CSGO!")
			.setImage(await akaneko.nsfw.masturbation())
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}