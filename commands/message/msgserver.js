module.exports = {
    name : 'shout-message',
    description: 'Sends a message in every channel of every server you are in.',
    usage:"*shout-message <text>",
    async execute(msg, client, args) {
        if (!args[0]) return msg.reply('I need something to msgserver!')
        if (args.join(" ").length > 2048) return msg.reply('Text can not exceed 2048 characters.')
        
        let channels = client.channels.array()
        msg.reply('Now sending that message in ' + channels.length + ' channels.')
    
        for(let i = 0; i < channels.length; i++) {
            try {
          await client.channels.get(channels[i].id).send(args.join(" "))
        } catch(err) {
            console.log('Could not send in channel, probably not accessable or no perms. continuing to next iteration.')
        } 
        }
        
        msg.channel.send('Done!')
    }
}