const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'celebritynsfw',
    description: 'sends a random celebrity nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.celebrity();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}