const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'circle',
    description: 'does something',
    usage: "!circle <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) member = message.author;

        let img = await new image.Circle().getImage(member.avatarURL, "$");

        let attachment = new Attachment(img, "circle.png");
        message.channel.send(attachment);

        // message.channel.send()
    }
}