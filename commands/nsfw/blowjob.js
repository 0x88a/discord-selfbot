const { RichEmbed } = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: 'blowjob',
    description: 'sends a random blowjob image',
    async execute(message, client, args) {
        let embed = new RichEmbed()
            .setTitle("	Basically an image of a girl sucking on a sharp blade!")
			.setImage(await akaneko.nsfw.blowjob())
			.setColor(3452151)
		message.channel.send({embed});
        
    }

}