const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'othernsfw',
    description: 'sends a random other nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.other();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}