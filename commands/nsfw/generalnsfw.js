const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'generalnsfw',
    description: 'sends a random general nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.general();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}