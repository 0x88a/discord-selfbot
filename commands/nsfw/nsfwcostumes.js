const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'nsfwcostumes',
    description: 'sends a random costumes nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.costumes();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}