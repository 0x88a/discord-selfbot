const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'kiss',
    description: 'does something',
    usage: "!kiss <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) {
            return;
        }

        let img = await new image.Kiss().getImage(message.author.avatarURL, member.avatarURL, 2000);

        let attachment = new Attachment(img, "kiss.png");
        message.channel.send(attachment);

        // message.channel.send()
    }
}