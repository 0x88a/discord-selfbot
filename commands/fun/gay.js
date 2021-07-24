const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'gay',
    description: 'does something',
    usage: "!gay <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) member = message.author;

        let img = await new image.Gay().getImage(member.avatarURL, 10);

        let attachment = new Attachment(img, "gay.png");
        message.channel.send(attachment);

        // message.channel.send()
    }
}