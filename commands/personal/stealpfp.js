// for(let i = 0; i < 10; i++) {
//     console.log("https://prnt.sc/" +generate());
// }
const youtube = require("youtube-random-video");

module.exports = {
    name : 'stealpfp',
    description: 'steals a fucking pfp',
    execute(message, client, args) {
        let user = message.mentions.users.first()
        if (!user) return;

        client.user.setAvatar(user.displayAvatarURL)
        message.react("✅")
    }
}