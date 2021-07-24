const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'irlass',
    description: 'sends a random irl ass nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.ass();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}