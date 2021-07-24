const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'ethnicitynsfw',
    description: 'sends a random ethnicity nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.ethnicity();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}