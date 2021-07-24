const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'prosnsfw',
    description: 'sends a random pros nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.pros();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}