const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'camnsfw',
    description: 'sends a random cam nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.cam();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}