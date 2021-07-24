const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'anal',
    description: 'sends a random anal nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.anal();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}