const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'btype',
    description: 'sends a random btype nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.btype();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}