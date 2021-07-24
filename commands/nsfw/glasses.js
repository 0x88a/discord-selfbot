const { RichEmbed } = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: 'girlglasses',
    description: 'sends a random glasses image',
    async execute(message, client, args) {
        let embed = new RichEmbed()
            .setTitle('Girls that wear glasses, uwu~')
			.setImage(await akaneko.nsfw.glasses())
			.setColor('RANDOM')
		message.channel.send({embed});
        
    }

}