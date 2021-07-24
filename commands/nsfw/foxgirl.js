const { RichEmbed } = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: 'foxgirl',
    description: 'sends a random foxgirl image',
    async execute(message, client, args) {
        let embed = new RichEmbed()
            .setTitle("Girl's that are wannabe foxes, yes")
			.setImage(await akaneko.nsfw.foxgirl())
			.setColor('RANDOM')
		message.channel.send({embed});
        
    }

}