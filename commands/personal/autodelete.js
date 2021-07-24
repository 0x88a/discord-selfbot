module.exports = {
    name : 'autodelete',
    description: 'does stuff',
    execute(message, client, args) {
        let choice = args[0] == null ? null : args.join(" ");

        if(!client.autodelete.get(client.user.id)) {
            if(choice == null && !client.autodelete.get(client.user.id)) return;
        
            if(isNaN(parseInt(choice))) return;
            client.autodelete.set(client.user.id, choice * 1000);
            message.channel.send('Turned on autodelete mode.')
            return;
        } else {
            client.autodelete.delete(client.user.id)
            message.channel.send('Turned off autodelete mode.')
                return;
        }

    }
}