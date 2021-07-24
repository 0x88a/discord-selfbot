const { RichEmbed } = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: 'hentai',
    description: 'sends a random hentai image',
    async execute(message, client, args) {
        let embed = new RichEmbed()
            .setTitle('Sends a random vanilla hentai imageURL~')
			.setImage(await akaneko.nsfw.hentai())
			.setColor('RANDOM')
		message.channel.send({embed});
        
    }

}