const { RichEmbed } = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: 'orgy',
    description: 'sends a random orgy image',
    async execute(message, client, args) {
        let embed = new RichEmbed()
            .setTitle("Group Lewd Acts")
			.setImage(await akaneko.nsfw.orgy())
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}