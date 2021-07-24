const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'whitegirl',
    description: 'sends a random white girl nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.white();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}