const { RichEmbed } = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: 'thighs',
    description: 'sends a random thighs image',
    async execute(message, client, args) {
        let embed = new RichEmbed()
            .setTitle("The top part of your legs, very hot, isn't it?")
			.setImage(await akaneko.nsfw.thighs())
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}