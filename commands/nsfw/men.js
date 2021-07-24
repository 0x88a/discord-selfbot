const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'men',
    description: 'sends a random men nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.men();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}