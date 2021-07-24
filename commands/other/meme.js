const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name : 'meme',
    description: 'in da name.',
    async execute(message, client, args) {
        const sub = ["dankmeme", "meme", "me_irl"];
        const randomReddit = sub[Math.floor(Math.random() * sub.length)];

        const img = await randomPuppy(randomReddit);
        console.log(img);
        const embed = new RichEmbed();
        embed.setColor("RANDOM");
        embed.setImage(img);
        embed.setURL("https://reddit.com/r/" + randomReddit);
        embed.setTitle(randomReddit);

        message.channel.send(embed);
    }
}
