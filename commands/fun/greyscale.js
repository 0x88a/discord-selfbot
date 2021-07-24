const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'greyscale',
    description: 'does something',
    usage: "!greyscale <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) member = message.author;

        let img = await new image.Greyscale().getImage(member.avatarURL, 10);

        let attachment = new Attachment(img, "greyscale.png");
        message.channel.send(attachment);

        // message.channel.send()
    }
}