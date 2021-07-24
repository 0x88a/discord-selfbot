

module.exports = {
    name : 'ban',
    description: 'bans user.',
    usage: "!ban @user",
    execute(msg) {
        if (!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.reply('You need the BAN_MEMBERS permission to use this.')
        let user = msg.mentions.users.first()
        if (!user) return msg.reply('You need to specify a user to ban.')


        if (!msg.guild.member(user).bannable) return msg.reply('Could not ban that user, either they have an higher role or you are just a noob.')

        msg.guild.member(user).ban()
        msg.channel.send(`Banned ${user.tag}.`)
    }
}