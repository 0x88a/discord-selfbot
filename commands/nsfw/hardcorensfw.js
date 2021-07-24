const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'hardcorensfw',
    description: 'sends a random hardcore nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.hardcore();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}