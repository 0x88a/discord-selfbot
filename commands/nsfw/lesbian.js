const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'lesbian',
    description: 'sends a random lesbian nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.lesbian();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}