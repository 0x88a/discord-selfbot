const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'milf',
    description: 'sends a random milf image',
    async execute(message, client, args) {
        let media = await trev.nsfw.milf();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}