const { RichEmbed } = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: 'feet',
    description: 'sends a random cum image',
    async execute(message, client, args) {
        let embed = new RichEmbed()
            .setTitle("So you like smelly feet huh?")
			.setImage(await akaneko.nsfw.feet())
			.setColor(3452151)
		message.channel.send({embed});
        
    }

}