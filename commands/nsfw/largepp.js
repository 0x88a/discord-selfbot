const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'largepp',
    description: 'sends a random largepp nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.largepenis();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}