const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'fitnsfw',
    description: 'sends a random fit nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.fit();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}