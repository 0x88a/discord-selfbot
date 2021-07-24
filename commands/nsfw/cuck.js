const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'cuck',
    description: 'sends a random cuck nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.cuck();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}