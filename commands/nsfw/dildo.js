const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'dildo',
    description: 'sends a random dildo nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.dildo();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}