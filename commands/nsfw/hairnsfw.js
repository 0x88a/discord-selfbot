const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'hairnsfw',
    description: 'sends a random hair nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.hair();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}