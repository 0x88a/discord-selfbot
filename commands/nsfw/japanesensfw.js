const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'japanesensfw',
    description: 'sends a random japanese nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.japanese();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}