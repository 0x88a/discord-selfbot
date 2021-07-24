const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'smallnsfw',
    description: 'sends a random small nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.small();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}