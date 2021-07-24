const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'vgamensfw',
    description: 'sends a random vgame nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.vgame();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}