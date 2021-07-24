var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet(url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

const { RichEmbed } = require("discord.js");

module.exports = {
    name: 'instagram',
    description : 'finds information about a provided instagram (usage: instagram [username]',
    execute(message, client, args) {
        var username = args;
        if (!username) return message.channel.send("Error, please provide a username").then(message => message.delete(500));
        var url = "https://apis.duncte123.me/insta/" + username;
        var raw_data = httpGet(url);
        var parsed_data = JSON.parse(raw_data);
        if (parsed_data.success == false) {
            return message.channel.send("Error, user not found").then(message => message.delete(500));
        }
        else {
            const embed = new RichEmbed();
           if (parsed_data.user.full_name) {
                embed.setTitle("Instagram: " + parsed_data.user.full_name);
                embed.setURL("https://www.instagram.com/" + parsed_data.user.username);
            }
            if (parsed_data.user.username)  {
                embed.addField("Username", parsed_data.user.username, true)
            }
            embed.addField("Private Account", parsed_data.user.is_private, true);
            embed.addField("Is Verified", parsed_data.user.is_verified, true);
            embed.addField("Followers", parsed_data.user.followers.count, true);
            embed.addField("Following", parsed_data.user.following.count, true);
            embed.addField("Pictures", parsed_data.user.uploads.count, true);
            if (parsed_data.user.profile_pic_url) {
                embed.setImage(parsed_data.user.profile_pic_url);
            }
            embed.setColor(15768378);

            message.channel.send({embed});
        }
    }
}