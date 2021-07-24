const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'irlpussy',
    description: 'sends a random irl pussy nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.pussy();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}