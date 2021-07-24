// subreddit 

const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");
const request = require("node-superfetch");

module.exports = {
    name : 'subreddit',
    description: 'in da name.',
    async execute(message, client, args) {
        if(!args[0]) return;

        request.get('https://www.reddit.com/r/' + args[0] + "/.json").then((res) => {
            console.log(res.body);

            let { body } = res;

            if(body.data.children.length == 0) {
                message.react("❌")
                return;
            }

            let latest = body.data.children[0];

            let embed = new RichEmbed();
            embed.setColor("RANDOM");

            if(latest.data.selftext_html) {
                embed.setDescription("I cannot view this subreddit for some reason, it seems maybe it has a confirmation wall?");
                message.channel.send(embed);
                return;
            }

            if(latest.data.thumbnail) embed.setImage(latest.data.thumbnail);
            if(latest.data.title) {
                if(latest.data.permalink) embed.setURL("https://www.reddit.com" + latest.data.permalink);
                embed.setTitle(latest.data.title);
            } else {
                embed.setURL("https://www.reddit.com/r/" + args[0]);
                embed.setTitle("r/" + args[0]);
            }
            embed.setFooter("👍 " + latest.data.ups + " 👎 " + latest.data.downs);

            console.log(latest);
            message.channel.send(embed);

        }).catch((err) => {
            message.react("❌")
            return;
        })
    }
}
