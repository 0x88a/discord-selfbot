const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'notstonk',
    description: 'does something',
    usage: "!notstonk <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) member = message.author;

        let img = await new image.NotStonk().getImage(member.avatarURL, 10);

        let attachment = new Attachment(img, "notstonk.png");
        message.channel.send(attachment);

        // message.channel.send()
    }
}