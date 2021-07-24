const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'affect',
    description: 'does something',
    usage: "!affect <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) member = message.author;

        let img = await new image.Affect().getImage(member.avatarURL, 10);

        let attachment = new Attachment(img, "affect.png");
        message.channel.send(attachment);

        // message.channel.send()
    }
}