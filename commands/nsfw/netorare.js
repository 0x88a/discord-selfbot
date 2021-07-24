const { RichEmbed } = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: 'netorare',
    description: 'sends a random netorare image',
    async execute(message, client, args) {
        let embed = new RichEmbed()
            .setTitle("Wow, I won't even question your fetishes.")
			.setImage(await akaneko.nsfw.netorare())
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}