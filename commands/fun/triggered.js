const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'triggered',
    description: 'does something',
    usage: "!triggered <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) member = message.author;

        let img = await new image.Triggered().getImage(member.avatarURL);

        let attachment = new Attachment(img, "triggered.gif");
        message.channel.send(attachment);

        // message.channel.send()
    }
}