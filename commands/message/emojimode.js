const emojis = require('random-emoji')
module.exports.run = (client, msg, args, config) => {

}
module.exports = {
    name: 'emoji-mode',
    description : 'finds information about a provided instagram (usage: instagram [username]',
    execute(message, client, args) {
        
        let emoji = emojis.random({count: 1})
        
        if(!client.emotemode.get(client.user.id)) {
            client.emotemode.set(client.user.id, emoji[0].character)
            message.channel.send('Turned on emote mode.')
            return;
        } else {
            client.emotemode.delete(client.user.id)
            message.channel.send('Turned off emote mode.')
                return;
        }
    }
}