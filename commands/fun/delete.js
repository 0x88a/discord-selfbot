const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'delete',
    description: 'does something',
    usage: "!delete <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) member = message.author;

        let img = await new image.Delete().getImage(member.avatarURL, 10);

        let attachment = new Attachment(img, "delete.png");
        message.channel.send(attachment);

        // message.channel.send()
    }
}