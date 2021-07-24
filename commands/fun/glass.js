const { RichEmbed } = require("discord.js");

module.exports = {
    name: 'glass',
    description: 'sends a glass overlay of a targetted user',
    execute(message, client, args) {
		if (!message.mentions.users.size) {
			return message.channel.send("Please mention a user in order to use this command")
		}
		var usertag = message.mentions.users.first();
		let embed = new RichEmbed()
			.setImage(`https://some-random-api.ml/canvas/glass?avatar=${usertag.avatarURL}`)
			.setColor(3452151)

		message.channel.send({embed});
        
    }


}