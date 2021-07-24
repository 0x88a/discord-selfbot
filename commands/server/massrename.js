module.exports = {
    name:"massrename",
    usage:"*massrename <name>",
    description: "Renames everyone in the server to a name of your choice.",
    async execute(message, client, args) {
        if(!msg.guild.me.hasPermission("MANAGE_NICKNAMES")) return msg.reply('This command requires the manage_nicknames permission!')
        let members = msg.guild.members.array()
    
        if(!args[0]) return;    
        if (args.join(" ").length > 32) return msg.reply('Nicknames can not exceed 32 characters.')
        msg.channel.send('Changing nicknames for ' + members.length + ' member(s), this may take some time.')
        for(let i = 0; i < members.length; i++) {
    
            await members[i].setNickname(args.join(" "))
           
        }
    
        msg.channel.send('Done changing nicknames.')
    }
}