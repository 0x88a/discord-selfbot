const { RichEmbed } = require('discord.js');
var search = require('youtube-search');
module.exports = {
    name : 'youtube',
    description: 'search up youtube videos',
    usage: 'youtube [title]',
    execute(message, _client, args) {
        if(!args[0]) return;
        var title = args.join(" ");

        var options = {
            maxResults : 1,
            key: process.env.GOOGLE_KEY
        };

        search(title, options, function(err, results) {
           if (err) return console.log(err);

           console.dir(results);

           if(!results[0]) return;

           let data = results[0];

           let embed = new RichEmbed().setColor("RED").addField("Author", "[" + data.channelTitle + "](https://www.youtube.com/channel/" + data.channelId + ")", true).addField("Video", `[${data.title}](${data.link})`).setThumbnail(data.thumbnails.default.url);
           message.channel.send(embed);
           message.channel.send(data.link);

           console.log(data.thumbnails.default.url);
        });
    }
}