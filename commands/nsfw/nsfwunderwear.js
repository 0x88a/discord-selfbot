const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'nsfwunderwear',
    description: 'sends a random underwear nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.underwear();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}