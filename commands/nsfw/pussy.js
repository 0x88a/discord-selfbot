const { RichEmbed } = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: 'pussy',
    description: 'sends a random pussy image',
    async execute(message, client, args) {
        let embed = new RichEmbed()
            .setTitle("The genitals of a female, or a cat, you give the meaning.")
			.setImage(await akaneko.nsfw.pussy())
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}