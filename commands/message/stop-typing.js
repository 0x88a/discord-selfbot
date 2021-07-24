module.exports = {
    name : 'stop-typing',
    description: 'stop the typing the command.',
    execute(msg, client, args) {
        msg.channel.execute.stopTyping()
        msg.react("✅")
           
    }
}