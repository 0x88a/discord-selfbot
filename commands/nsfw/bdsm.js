const { RichEmbed } = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: 'bdsm',
    description: 'sends a random bdsm image',
    async execute(message, client, args) {
        let embed = new RichEmbed()
            .setTitle("If you don't know what it is, search it up")
			.setImage(await akaneko.nsfw.bdsm())
			.setColor(3452151)
		message.channel.send({embed});
        
    }

}