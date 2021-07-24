const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'creampie',
    description: 'sends a random creampie nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.cuminside();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}