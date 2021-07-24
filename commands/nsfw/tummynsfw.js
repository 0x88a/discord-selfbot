const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'tummynsfw',
    description: 'sends a random tummy nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.tummy();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}