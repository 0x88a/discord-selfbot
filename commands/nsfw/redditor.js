const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'redditor',
    description: 'sends a random redditor nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.redditor();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}