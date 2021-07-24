const { RichEmbed } = require("discord.js");
const request = require("node-superfetch");

module.exports = {
    name : 'urban',
    description: 'gets word info idk',
    execute(message, client, args) {
        if(!args[0]) return;

        let embed = new RichEmbed().setColor("RED");
        embed.setDescription("The word you searched for does not exist.");

        request.get("http://api.urbandictionary.com/v0/define?term=" + encodeURI(args.join(" "))).then(res => {
            let body = res.body;

            if(body.list.length == 0) {
                return message.channel.send(embed);
            }

            let data = res.body.list[0];

            embed.setColor("GREEN");
            embed.setDescription("Viewing...");
            embed.addField("Word", data.word, true);
            embed.addField("Definition", data.definition, true);
            embed.addField("Example", data.example, true);
            embed.setFooter("👍 " + data.thumbs_up + " 👎 " + data.thumbs_down);

            message.channel.send(embed);

            console.log(data);
        }).catch(() => {
            return message.channel.send(embed);
        })
    }
}