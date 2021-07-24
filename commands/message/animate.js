const Font = require('ascii-art-font');
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
module.exports = {
    name: 'animate',
    description: 'animates text',
    execute(message, client, args) {
        console.log("Command sent: Animate");
        var text = args;
        message.channel.send(text).then((message) => {
            var textArray = [];
            for (i = 0; i < text.length; i++) {
                textArray.push(text[i]);
            }
            var text2 = "";
            for (i = 0; i< textArray.length; i++) {
                text2 = text2 + textArray[i];
                sleep(5000);
                message.edit(text2);
            }

        });

    }
}