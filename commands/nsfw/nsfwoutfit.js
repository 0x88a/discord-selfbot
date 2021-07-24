const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'nsfwoutfit',
    description: 'sends a random outfit nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.outfit();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}