function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function randomColor(){
    return  (0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
}
function hexToDec(hex) {
    var result = 0, digitValue;
    hex = hex.toLowerCase();
    for (var i = 0; i < hex.length; i++) {
        digitValue = '0123456789abcdefgh'.indexOf(hex[i]);
        result = result * 16 + digitValue;
    }
    return result;
}
module.exports = {
    name : 'quote',
    description: 'quotes mentioned message',
    execute(message, client, discord) {
        var id = content;

       if (!id) return;
       message.channel.fetchMessages({around: id, limit: 1})
           .then(messages => {
              let message = messages.first();
              let random = randomColor();
              let time = message.editedTimestamp || message.createdTimestamp;
              let embed = new discord.RichEmbed()
                  .setDescription(message.toString())
                  .setColor(hexToDec(random))
                  .setAuthor(message.author.username, message.author.avatarURL);
              if (time) {
                  time = new Date(time);
                  embed.setTimestamp(time);
              }
               let attatchement = message.attachments.first();

               if (attatchement && (attatchement.width || attatchement.height)) {
                   embed.setImage(attatchement.url)
               }

               message.channel.send({embed});
           });
    }
}