const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'jail',
    description: 'does something',
    usage: "!jail <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) member = message.author;

        let img = await new image.Jail().getImage(member.avatarURL);

        let attachment = new Attachment(img, "jail.png");
        message.channel.send(attachment);

        // message.channel.send()
    }
}