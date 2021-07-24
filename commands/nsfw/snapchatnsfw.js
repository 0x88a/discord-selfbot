const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'snapchatnsfw',
    description: 'sends a random snapchat nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.snapchat();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}