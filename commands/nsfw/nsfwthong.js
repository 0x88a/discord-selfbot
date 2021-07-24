const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'nsfwthong',
    description: 'sends a random thong nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.thong();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}