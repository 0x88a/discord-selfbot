const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'blink',
    description: 'does something',
    usage: "!blink <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) {
            return;
        }

        let img = await new image.Blink().getImage(message.author.avatarURL, member.avatarURL, 2000);

        let attachment = new Attachment(img, "blink.gif");
        message.channel.send(attachment);

        // message.channel.send()
    }
}