const { RichEmbed } = require("discord.js");
const trev = require("trev");

module.exports = {
    name: 'irlblowjob',
    description: 'sends a random irl blowjob nsfw image',
    async execute(message, client, args) {
        let media = await trev.nsfw.blowjob();
        let embed = new RichEmbed()
            .setTitle(`${media.title}`)
			.setImage(`${media.media}`)
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}