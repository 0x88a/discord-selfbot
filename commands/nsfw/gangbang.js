const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'gangbang',
    description: 'sends a random gangbang image nsfw',
    async execute(message, client, args) {
        let media = await trev.nsfw.group();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}