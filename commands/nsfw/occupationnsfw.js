const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'occupationnsfw',
    description: 'sends a random occupation nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.occupation();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}