const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'blur',
    description: 'does something',
    usage: "!blur <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) member = message.author;

        let img = await new image.Blur().getImage(member.avatarURL, 10);

        let attachment = new Attachment(img, "blur.png");
        message.channel.send(attachment);

        // message.channel.send()
    }
}