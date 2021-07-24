module.exports = {
    name : 'caplockmode',
    description: 'does stuff',
    execute(message, client, args) {
        if(!client.caplockmode.get(client.user.id)) {
            client.caplockmode.set(client.user.id, "joe");
            message.channel.send('Turned on caplockmode mode.')
            return;
        } else {
            client.caplockmode.delete(client.user.id)
            message.channel.send('Turned off caplockmode mode.')
                return;
        }

    }
}