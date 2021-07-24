const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'porn',
    description: 'sends a random porn nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.porn();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}