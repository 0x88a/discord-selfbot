const { RichEmbed } = require("discord.js");

module.exports = {
    name: 'gey',
    description: 'sends a gay overlay of a targetted user',
    execute(message, client, args) {
		if (!message.mentions.users.size) {
			return message.channel.send("Please mention a user in order to use this command")
		}
		var usertag = mentions.users.first();
		let embed = new discord.RichEmbed()
			.setImage(`https://some-random-api.ml/canvas/gay?avatar=${usertag.avatarURL}`)
			.setColor(3452151)

		message.channel.send({embed});
        
    }


}