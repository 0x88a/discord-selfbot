const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'confusedstonks',
    description: 'does something',
    usage: "!confusedstonks <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) member = message.author;

        let img = await new image.ConfusedStonk().getImage(member.avatarURL, 10);

        let attachment = new Attachment(img, "confusedstonks.png");
        message.channel.send(attachment);

        // message.channel.send()
    }
}