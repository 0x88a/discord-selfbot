const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'bobross',
    description: 'does something',
    usage: "!bobross <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) member = message.author;

        let img = await new image.Bobross().getImage(member.avatarURL, 10);

        let attachment = new Attachment(img, "bobross.png");
        message.channel.send(attachment);

        // message.channel.send()
    }
}