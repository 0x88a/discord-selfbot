const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'poutine',
    description: 'does something',
    usage: "!poutine <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) member = message.author;

        let img = await new image.Poutine().getImage(member.avatarURL, 10);

        let attachment = new Attachment(img, "poutine.png");
        message.channel.send(attachment);

        // message.channel.send()
    }
}