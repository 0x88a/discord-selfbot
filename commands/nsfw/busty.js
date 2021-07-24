const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'busty',
    description: 'sends a random busty nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.busty();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}