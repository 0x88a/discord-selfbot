const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'tatoo',
    description: 'does something',
    usage: "!tatoo <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) member = message.author;

        let img = await new image.Tatoo().getImage(member.avatarURL, 10);

        let attachment = new Attachment(img, "tatoo.png");
        message.channel.send(attachment);

        // message.channel.send()
    }
}