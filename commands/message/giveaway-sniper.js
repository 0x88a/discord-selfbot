module.exports = {
    name: 'giveaway-sniper',
    description : 'does something',
    execute(message, client, args) {

        if(!client.gwSniper.get(client.user.id)) {
            client.gwSniper.set(client.user.id, "joe")
            message.channel.send('Turned on giveaway sniper mode.')
            return;
        } else {
            client.gwSniper.delete(client.user.id)
            message.channel.send('Turned off giveaway sniper mode.')
                return;
        }
    }
}