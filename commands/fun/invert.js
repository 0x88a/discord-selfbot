const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'invert',
    description: 'does something',
    usage: "!invert <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) member = message.author;

        let img = await new image.Invert().getImage(member.avatarURL, 10);

        let attachment = new Attachment(img, "invert.png");
        message.channel.send(attachment);

        // message.channel.send()
    }
}