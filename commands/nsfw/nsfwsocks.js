const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'nsfwsocks',
    description: 'sends a random socks nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.socks();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}