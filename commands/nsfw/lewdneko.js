const { RichEmbed } = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: 'lewdNeko',
    description: 'sends a lewd neko image',
    async execute(message, client, args) {
		let embed = new RichEmbed()
			.setImage(await akaneko.lewdNeko())
			.setColor(3452151)
		message.channel.send({embed});
        
    }


}