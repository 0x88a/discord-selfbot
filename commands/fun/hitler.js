const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'hitler',
    description: 'does something',
    usage: "!hitler <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) member = message.author;

        let img = await new image.Hitler().getImage(member.avatarURL);

        let attachment = new Attachment(img, "hitler.png");
        message.channel.send(attachment);

        // message.channel.send()
    }
}