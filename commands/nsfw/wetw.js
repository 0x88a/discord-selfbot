const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'wetw',
    description: 'sends a random wetw nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.wetw();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}