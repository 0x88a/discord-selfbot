const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'stonk',
    description: 'does something',
    usage: "!stonk <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) member = message.author;

        let img = await new image.Stonk().getImage(member.avatarURL, 10);

        let attachment = new Attachment(img, "stonk.png");
        message.channel.send(attachment);

        // message.channel.send()
    }
}