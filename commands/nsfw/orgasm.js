const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'orgasm',
    description: 'sends a random orgasm nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.orgasm();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}