const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'gingernsfw',
    description: 'sends a random ginger nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.ginger();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}