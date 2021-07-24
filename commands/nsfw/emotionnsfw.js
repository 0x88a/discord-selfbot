const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'emotionnsfw',
    description: 'sends a random emotion nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.emotion();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}