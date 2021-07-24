const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'transnsfw',
    description: 'sends a random trans nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.trans();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}