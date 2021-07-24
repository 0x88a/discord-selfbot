const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'bikinis',
    description: 'sends a random bikinis nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.bikinis();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}