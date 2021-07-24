const { RichEmbed } = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: 'school',
    description: 'sends a random school image',
    async execute(message, client, args) {
        let embed = new RichEmbed()
            .setTitle("School Uniforms!~ Yatta~!")
			.setImage(await akaneko.nsfw.school())
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}