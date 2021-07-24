const { RichEmbed } = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: 'femdom',
    description: 'sends a random femdom image',
    async execute(message, client, args) {
        let embed = new RichEmbed()
            .setTitle('Female Domination?')
			.setImage(await akaneko.nsfw.femdom())
			.setColor('RANDOM')
		message.channel.send({embed});
        
    }

}