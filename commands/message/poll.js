function sendPoll(message, question, color) {
    const embed = {
        "title": "``" + question + "``",
        "color": color,
        "timestamp": new Date(),
        "footer": {
            "text": "Poll!"
        },

    };
    message.channel.send({embed}).then(message => {
        message.react('❌');
        message.react('✅');
    })
}
module.exports = {
    name: 'poll',
    description: 'automatically makes a poll',
    execute(message, client, args) {
        var question = args;
        var color = 12779264;
        if (!question) return;
        sendPoll(message, question, color);

    }


}