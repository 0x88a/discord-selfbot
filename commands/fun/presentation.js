const image = require("discord-image-generation");
const { Attachment } = require("discord.js");

module.exports = {
    name: 'presentation',
    description: 'does something',
    usage: "!presentation <user>",
    async execute(message, client, args) {
        if(!args[0]) return;

        let img = await new image.LisaPresentation().getImage(args.join(" "));

        let attachment = new Attachment(img, "presentation.png");
        message.channel.send(attachment);

        // message.channel.send()
    }
}