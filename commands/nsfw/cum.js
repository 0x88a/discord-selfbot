const { RichEmbed } = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: 'cum',
    description: 'sends a random cum image',
    async execute(message, client, args) {
        let embed = new RichEmbed()
            .setTitle("Basically sticky white stuff that is usually milked from sharpies.")
			.setImage(await akaneko.nsfw.cum())
			.setColor(3452151)
		message.channel.send({embed});
        
    }

}