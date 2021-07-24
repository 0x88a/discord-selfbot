const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'cumlocation',
    description: 'sends a random skin nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.cumlocation();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}