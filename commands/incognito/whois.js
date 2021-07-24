var moment = require('moment');
function getUserFromMention(mention, client) {
    if (!mention) return;

    if (mention.startsWith('<@') && mention.endsWith('>')) {
        mention = mention.slice(2, -1);

        if (mention.startsWith('!')) {
            mention = mention.slice(1);
        }

        return client.users.get(mention);
    }
}
function sendEmbedMessage(message, username, status, created_at, avatar_url, game) {
    const embed = {
        "title": "User Information",
        "description": "```" + username + "```",
        "color": 10389160,
        "timestamp": new Date(),
        "image": {
            "url": avatar_url
        },
        "fields": [
            {
                "name": "Username",
                "value": username
            },
            {
                "name": "Registered",
                "value": created_at
            },
            {
                "name": "Game",
                "value": game
            }
        ]
    };
    message.channel.send({embed});
}
module.exports = {
    name : 'whois',
    description: 'display user information for mentioned user',
    execute(message, client, args) {
            const user = getUserFromMention(args[0], client);
            if (!user) return;
            var created_at = moment(user.createdAt).format('LLLL');
            const username = user.username;
            const status = user.presence.status;
            var game = user.presence.game;

            if (game == null) {
                game = "not playing";
            }
            sendEmbedMessage(message, username, status, created_at, user.avatarURL, game);
            console.log("Command Sent: whois");


    }
}