const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'spank',
    description: 'does something',
    usage: "!spank <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) {
            return;
        }

        let img = await new image.Spank().getImage(message.author.avatarURL, member.avatarURL);

        let attachment = new Attachment(img, "spank.png");
        message.channel.send(attachment);

        // message.channel.send()
    }
}