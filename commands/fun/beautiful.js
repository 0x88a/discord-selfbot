const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'beautiful',
    description: 'does something',
    usage: "!beautiful <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) member = message.author;

        let img = await new image.Beautiful().getImage(member.avatarURL, 10);

        let attachment = new Attachment(img, "beautiful.png");
        message.channel.send(attachment);

        // message.channel.send()
    }
}