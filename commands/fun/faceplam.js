const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'facepalm',
    description: 'does something',
    usage: "!facepalm <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) member = message.author;

        let img = await new image.Facepalm().getImage(member.avatarURL);

        let attachment = new Attachment(img, "facepalm.png");
        message.channel.send(attachment);

        // message.channel.send()
    }
}