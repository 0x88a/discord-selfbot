const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'yogapantsnsfw',
    description: 'sends a random yoga pants nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.yogapants();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}