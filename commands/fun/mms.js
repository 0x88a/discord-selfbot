const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'mms',
    description: 'does something',
    usage: "!mms <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) member = message.author;

        let img = await new image.Mms().getImage(member.avatarURL, 10);

        let attachment = new Attachment(img, "mms.png");
        message.channel.send(attachment);

        // message.channel.send()
    }
}