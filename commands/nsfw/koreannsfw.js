const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'koreannsfw',
    description: 'sends a random korean nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.korean();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}