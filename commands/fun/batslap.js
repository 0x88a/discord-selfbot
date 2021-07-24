const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'batslap',
    description: 'does something',
    usage: "!batslap <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) {
            return;
        }

        let img = await new image.Batslap().getImage(message.author.avatarURL, member.avatarURL, 2000);

        let attachment = new Attachment(img, "batslap.gif");
        message.channel.send(attachment);

        // message.channel.send()
    }
}