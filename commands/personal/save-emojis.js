const fs = require("fs");
const request = require("request");
const { join } = require("path");

module.exports = {
    name : 'save-emojis',
    description: 'quotes mentioned message',
    execute(message, client, discord) {
        // message.guild.emojis.forEach(emoji => {
        //     const file = fs.createWriteStream(join(__dirname, "..", "..", "emojis", message.guild.id + "-" + emoji.id + ".png"));
        //     const request = http.get(emoji.url.replace("https", "http"), function(response) {
        //         response.pipe(file);
        //     });
        // });

        message.guild.emojis.forEach(emoji => {
            this.download(emoji.url, join(__dirname, "..", "..", "emojis", `${message.guild.id}-${emoji.name}.png`), function() {
                console.log("joe");
            })  
        })
        message.channel.send(":white_check_mark: Saved.");
    },
    download(uri, filename, callback) {
        request.head(uri, function(err, res, body) {
            request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        })
    }
}