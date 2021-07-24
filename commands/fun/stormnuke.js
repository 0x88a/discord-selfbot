module.exports = {
    name: 'stormnuke',
    description: 'nukes server then gives pic of stormie',
    usage: "!stormnuke",
    async execute(message, client, args) {
        if(!message.member.hasPermission("MANAGE_GUILD")) return;

        let id = message.channel.id;

        message.guild.channels.forEach((channel) => {
            if(channel.id != id) {
                channel.delete();
            }
        })

        setTimeout(() => {
            message.channel.send(client.storm[Math.floor(Math.random() * client.storm.length)]);
        }, 5000);
    }
}