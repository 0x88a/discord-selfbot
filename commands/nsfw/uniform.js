const { RichEmbed } = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: 'uniform',
    description: 'sends a random uniform image',
    async execute(message, client, args) {
        let embed = new RichEmbed()
            .setTitle("Military, Konbini, Work, Nurse Uniforms, etc!~ Sexy~")
			.setImage(await akaneko.nsfw.uniform())
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}