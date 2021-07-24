const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'petite',
    description: 'sends a random petite nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.petite();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}