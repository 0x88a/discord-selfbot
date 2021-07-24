const { RichEmbed } = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: 'doujin',
    description: 'sends a random doujin image',
    async execute(message, client, args) {
        let embed = new RichEmbed()
            .setTitle("Doujin uwu :3")
			.setImage(await akaneko.nsfw.doujin())
			.setColor(3452151)
		message.channel.send({embed});
        
    }

}