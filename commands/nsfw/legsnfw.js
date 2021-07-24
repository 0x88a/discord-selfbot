const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'legsnsfw',
    description: 'sends a random legs nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.legs();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}