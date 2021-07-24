const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'thicc',
    description: 'sends a random thicc nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.thicc();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}