const { RichEmbed, Attachment } = require("discord.js");
const request = require("node-superfetch");

module.exports = {
    name : 'lyrics',
    description: 'gets lyrics for a song',
    async execute(message, client, args) {
        if(!args[0]) return;

        let song = args.join(" ");

        function getSong(name) {
            return new Promise(async function(resolve, object) {
                let res = await request.get("https://some-random-api.ml/lyrics/?title=" + encodeURI(name));
                res = await res.body;
                resolve(res);
            })
        };

        let info = await getSong(song);

        const embed = new RichEmbed();

        embed.setColor("GREEN");
        embed.setTitle("Lyrics");
        embed.setDescription(`**We searched the entire internet, and found these lyrics for you**`);
        embed.addField(`Title`, info.title);
        embed.addField(`Author`, info.author);
        embed.addField(`Lyrics`, `View in attachments...`);
        embed.setThumbnail(info.thumbnail.genius);

        message.channel.send({ embed: embed, file: new Attachment(Buffer.from(info.lyrics), "lyrics.txt") });
    }
}