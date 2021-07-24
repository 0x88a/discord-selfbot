const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'nsfwpositions',
    description: 'sends a random positions nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.positions();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}