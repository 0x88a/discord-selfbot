const { RichEmbed } = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: 'panties',
    description: 'sends a random panties image',
    async execute(message, client, args) {
        let embed = new RichEmbed()
            .setTitle("I mean... just why? You like underwear?")
			.setImage(await akaneko.nsfw.panties())
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}