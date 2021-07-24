module.exports = {
    name : 'avatar',
    description: 'shows other member avatar',
    execute(message, client, args) {
        let member = message.mentions.users.first();
        if(member == undefined) return;
        message.channel.send(member.avatarURL);
    }
}
