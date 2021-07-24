const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'bed',
    description: 'does something',
    usage: "!bed <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) {
            return;
        }

        let img = await new image.Bed().getImage(message.author.avatarURL, member.avatarURL, 2000);

        let attachment = new Attachment(img, "bed.png");
        message.channel.send(attachment);

        // message.channel.send()
    }
}