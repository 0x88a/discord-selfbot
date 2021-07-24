var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet(url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
module.exports = {
    name : 'rule34',
    description: 'some weeb shit idk',
    execute(message, client, args) {
       var tags = message.content.split(' ').splice(1).join(' ');
       var url = "https://r34-json-api.herokuapp.com/posts?tags=" + tags;
       var data = JSON.parse(httpGet(url));
       if (!data || data.length == 0)
           return message.channel.send("No results").then(msg => {msg.delete(1000)});
        var random = getRandomInt(data.length);
       var random_image = data[random];
       if (!random_image.file_url || random_image == null || !random_image)
           return message.channel.send("No results").then(msg => {msg.delete(1000)});
       let embed = new discord.RichEmbed()
           .setImage(random_image.file_url);
       message.channel.send({embed});

    }
}