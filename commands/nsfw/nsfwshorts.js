const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'nsfwshorts',
    description: 'sends a random shorts nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.shorts();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}