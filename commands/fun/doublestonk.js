const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'doublestonk',
    description: 'does something',
    usage: "!doublestonk <user>",
    async execute(message, client, args) {
        let member = message.mentions.users.first();
        if(!member) {
            return;
        }

        let img = await new image.DoubleStonk().getImage(message.author.avatarURL, member.avatarURL);

        let attachment = new Attachment(img, "doublestonk.png");
        message.channel.send(attachment);

        // message.channel.send()
    }
}