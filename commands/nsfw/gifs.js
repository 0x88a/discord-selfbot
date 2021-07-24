const { RichEmbed } = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: 'gifs',
    description: 'Basically an animated image, so yes :3',
    async execute(message, client, args) {
        let embed = new RichEmbed()
            .setTitle('Animated hentai :3')
			.setImage(await akaneko.nsfw.gifs())
			.setColor('RANDOM')
		message.channel.send({embed});
        
    }

}