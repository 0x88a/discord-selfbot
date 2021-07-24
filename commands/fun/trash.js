const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'trash',
    description: 'does something',
    usage: "!trash <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) member = message.author;

        let img = await new image.Trash().getImage(member.avatarURL, 10);

        let attachment = new Attachment(img, "trash.png");
        message.channel.send(attachment);

        // message.channel.send()
    }
}