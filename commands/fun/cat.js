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
    name: 'cat',
    description: 'sends a random picture of a cat (usage: cat)',
    usage: '!cat',
    execute(message, client, args) {
        var url = "https://apis.duncte123.me/animal/cat";
        var raw_data = httpGet(url);
        var data= JSON.parse(raw_data);
        if (data.success == true) {
            let embed = new RichEmbed()
                .setImage(data.data.file)
                .setColor(3452151)

            message.channel.send({embed});
        }
        else {
            let embed = new discord.RichEmbed()
                .setTitle("Uh oh, error occurred");

            message.channel.send({embed}).then(message => message.delete(1000));
        }
    }


}