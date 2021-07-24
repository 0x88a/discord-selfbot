const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'asshole',
    description: 'sends a random asshole nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.asshole();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}