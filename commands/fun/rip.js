const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'rip',
    description: 'does something',
    usage: "!rip <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) member = message.author;

        let img = await new image.Rip().getImage(member.avatarURL, 10);

        let attachment = new Attachment(img, "rip.png");
        message.channel.send(attachment);

        // message.channel.send()
    }
}