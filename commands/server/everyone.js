module.exports = {
    name: 'everyone',
    description: 'mentions everyone in a server',
    usage: "!everyone",
    execute(message) {
        message.guild.fetchMembers().then(memberList => {
            var id = "";
            memberList.members.array().forEach(memberList => {
               id = id + "<@" + memberList.user.id + ">";
           });
            var mid = id.length / 2;
            var parts = [id.substring(0, mid), id.substring(mid)];

            message.channel.send(parts[0]).then(message => {
                message.delete(500);

                message.channel.send(parts[1]).then(message => {
                    message.delete(500);
                })
            })
        });
    }
}