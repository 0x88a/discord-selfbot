var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const { RichEmbed } = require("discord.js");


function httpGet(key, steamid){
    var url = "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=" + key + "&steamids=" + steamid + "&format=JSON";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
module.exports = {
    name: "steam",
    description: "grabs information about a 64-bit steam id",
    execute(message, _client, args) {

        if(!args[0]) {
            return;
        }

        var api_key = 'E7F64F5186C65B3EBD84D2A56E9E1315';
        var steamid = args[0];
        var result = JSON.parse(httpGet(api_key, steamid));
        var data = result.response.players[0];
        console.log(data);
        var data_created = new Date(data.timecreated);
        
        const embed = new RichEmbed();
            embed.setTitle(data.personaname)
            embed.setColor(2770782)
            embed.setThumbnail(data.avatarfull)
            embed.addField("Steam ID", data.steamid)
            embed.addField("Country", data.loccountrycode)
            embed.addField("Created At", data_created);

        message.channel.send({embed});

    }
}
