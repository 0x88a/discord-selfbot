const { RichEmbed } = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: 'yuri',
    description: 'sends a random yuri image',
    async execute(message, client, args) {
        let embed = new RichEmbed()
            .setTitle("Girls on Girls, and Girl's only!<3")
			.setImage(await akaneko.nsfw.yuri())
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}