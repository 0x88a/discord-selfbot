const { RichEmbed } = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: 'loli',
    description: 'sends a random loli image',
    async execute(message, client, args) {
        let embed = new RichEmbed()
            .setTitle("Things you shouldn't search for, that includes me")
			.setImage(await akaneko.nsfw.loli())
			.setColor('RANDOM')
		message.channel.send({embed});
        
    }

}