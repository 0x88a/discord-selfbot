const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'athletensfw',
    description: 'sends a random athlete nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.athlete();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}