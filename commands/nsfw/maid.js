const { RichEmbed } = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: 'maid',
    description: 'sends a random maid image',
    async execute(message, client, args) {
        let embed = new RichEmbed()
            .setTitle("Maids, Maid Uniforms, etc, you know what maids are :3")
			.setImage(await akaneko.nsfw.maid())
			.setColor('RANDOM')
		message.channel.send({embed});
    }

}