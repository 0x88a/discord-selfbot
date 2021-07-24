const { RichEmbed } = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: 'uglyBastard',
    description: 'sends a random uglyBastard image',
    async execute(message, client, args) {
        let embed = new RichEmbed()
            .setTitle("The one thing most of us can all agree to hate :)")
			.setImage(await akaneko.nsfw.uglyBastard())
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}