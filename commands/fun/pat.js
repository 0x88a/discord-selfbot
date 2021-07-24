var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet(url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    //xmlHttp.setRequestHeader("X-Key",key);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

const { RichEmbed } = require("discord.js");

module.exports = {
    name: 'pat',
    description: 'sends a random pat gif',
    execute(message, client, args) {
        var url = "https://some-random-api.ml/animu/pat";
        var raw_data = httpGet(url);
        var data = JSON.parse(raw_data);
		let embed = new RichEmbed()
		.setTitle('Heres Big pat on the head:pleading_face:')
			.setImage(data.link)
			.setColor(3452151)

		message.channel.send({embed});
        
    }


}