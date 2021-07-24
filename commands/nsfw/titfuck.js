const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'titfuck',
    description: 'sends a random tit fuck nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.titfuck();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}