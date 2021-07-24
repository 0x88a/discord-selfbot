const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'wanted',
    description: 'does something',
    usage: "!wanted <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) member = message.author;

        let img = await new image.Wanted().getImage(member.avatarURL, "$");

        let attachment = new Attachment(img, "wanted.png");
        message.channel.send(attachment);

        // message.channel.send()
    }
}