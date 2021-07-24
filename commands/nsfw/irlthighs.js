const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'irlthighs',
    description: 'sends a random thigh nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.thigh();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}