const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'comicsnsfw',
    description: 'sends a random comics nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.comics();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}