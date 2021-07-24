const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'irlgifs',
    description: 'sends a random irl nsfw gifs',
    async execute(message, client, args) {
        let media = await trev.nsfw.gifs();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}