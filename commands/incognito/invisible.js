module.exports = {
    name : 'invisible',
    description: 'Makes profile and username invisible',
    execute(msg, client, args) {
        let password = args[0]
        if (!password) return msg.reply('You need to put your password as second argument, do this somewhere nobody can see you type it.')
        client.user.setAvatar("https://cdn.discordapp.com/attachments/675096319848873994/675101288954069062/transparent-picture.png")
        client.user.setUsername("ٴٴٴٴٴٴٴٴٴٴ")
        msg.react("✅")
    }
}