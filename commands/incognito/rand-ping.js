module.exports = {
    name:"rand-ping",
    description: "Randomly pings a user in the server.",
    usage:"*rand-ping",
    execute(msg) {
        let member = msg.guild.members.random()
        msg.channel.send(`${member.user.toString()}`)
    }
}