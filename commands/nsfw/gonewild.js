const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'gonewild',
    description: 'sends a random gone wild nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.gonewild();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}