const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'mound',
    description: 'sends a random mound nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.mound();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}