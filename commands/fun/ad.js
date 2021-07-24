const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'ad',
    description: 'does something',
    usage: "!ad <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) member = message.author;

        let img = await new image.Ad().getImage(member.avatarURL, 10);

        let attachment = new Attachment(img, "ad.png");
        message.channel.send(attachment);

        // message.channel.send()
    }
}