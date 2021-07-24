const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'curvesnsfw',
    description: 'sends a random curves nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.curves();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}