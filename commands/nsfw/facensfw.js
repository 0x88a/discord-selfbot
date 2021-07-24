const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'facensfw',
    description: 'sends a random face nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.face();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}