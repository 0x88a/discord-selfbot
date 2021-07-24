const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'irlbdsm',
    description: 'sends a random irl bdsm nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.bdsm();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}