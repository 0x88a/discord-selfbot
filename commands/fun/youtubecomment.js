const { RichEmbed, Attachment } = require("discord.js");

module.exports = {
    name: 'youtubecomment',
    description: 'sends a generated youtube comment of a targetted user',
    execute(message, client, args) {
		if (!message.mentions.users.size) {
			return message.channel.send("Please mention a user in order to use this command")
		}
		if (message.content.split(' ').splice(2).join(' ') === "" ){
			return message.channel.send("Please put a comment in order to use this command")
		}
        let comment =  message.content.split(' ').splice(2).join(' ') 
		var usertag = message.mentions.users.first();
		var url = (encodeURI(`https://some-random-api.ml/canvas/youtube-comment?avatar=${usertag.avatarURL}&username=${usertag.username}&comment=${comment}`));
		const attachment = new Attachment(url, 'youtube.png');
		let embed = new RichEmbed()
			.attachFile(attachment)
			.setImage('attachment://youtube.png')
			.setColor(3452151)

		message.channel.send({embed});
        
    }


}