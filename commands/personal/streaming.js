module.exports = {
    name : 'streaming',
    description: 'set streaming status',
    usage: "!streaming <text>",
    execute(message, client, args) {
        if (!args[0]) return message.reply('I need a message to set as streaming.')

        if (args.join(" ").length > 100) return message.reply('That is too long of a message to set.')
        client.user.setActivity(args.join(" "), { type: "STREAMING", url: "https://twitch.tv/vance" })
        message.react("✅")
    }
}
