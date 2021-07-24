const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'irlboobs',
    description: 'sends a random irl boobs nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.boobs();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}