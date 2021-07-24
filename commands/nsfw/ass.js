const { RichEmbed } = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: 'ass',
    description: 'sends a random ass image',
    async execute(message, client, args) {
        let embed = new RichEmbed()
            .setTitle('I know you like anime ass~ uwu')
			.setImage(await akaneko.nsfw.ass())
			.setColor(3452151)
		message.channel.send({embed});
        
    }

}