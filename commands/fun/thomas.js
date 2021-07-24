const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'thomas',
    description: 'does something',
    usage: "!thomas <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) member = message.author;

        let img = await new image.Thomas().getImage(member.avatarURL, 10);

        let attachment = new Attachment(img, "thomas.png");
        message.channel.send(attachment);

        // message.channel.send()
    }
}