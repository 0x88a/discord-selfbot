
module.exports = {
    name : 'afk-mode',
    description: 'Play a fun game of 8-ball',
    usage: '!afk-mode <response>',
    execute(msg, client, args) {

        let choice = args[0] == null ? null : args.join(" ");

        if(choice == null && !client.afkmode.get(client.user.id)) return;
 
        if(!client.afkmode.get(client.user.id)) {
            client.afkmode.set(client.user.id, choice);
            message.channel.send('Turned on afk mode.')
            return;
        } else {
            client.afkmode.delete(client.user.id)
            message.channel.send('Turned off afk mode.')
                return;
        }
    }
}