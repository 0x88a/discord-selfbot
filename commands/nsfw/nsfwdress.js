const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'nsfwdress',
    description: 'sends a random dress nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.dress();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}