const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'cumshot',
    description: 'sends a random cumshot nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.cum();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}