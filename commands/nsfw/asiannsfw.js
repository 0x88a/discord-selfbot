const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'asiannsfw',
    description: 'sends a random asian nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.asian();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}