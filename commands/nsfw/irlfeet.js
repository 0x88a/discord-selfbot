const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'irlfeet',
    description: 'sends a random feet nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.feet();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}