const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'sepia',
    description: 'does something',
    usage: "!sepia <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) member = message.author;

        let img = await new image.Sepia().getImage(member.avatarURL, 10);

        let attachment = new Attachment(img, "sepia.png");
        message.channel.send(attachment);

        // message.channel.send()
    }
}