const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'couplesnfw',
    description: 'sends a random couples nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.couples();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}