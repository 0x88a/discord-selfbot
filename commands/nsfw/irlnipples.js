const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'irlnipples',
    description: 'sends a random irl nipples nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.nipples();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}