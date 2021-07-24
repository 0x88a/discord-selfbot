const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'latinansfw',
    description: 'sends a random latina nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.latina();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}