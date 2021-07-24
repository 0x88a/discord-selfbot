module.exports = {
    name: 'storm',
    description: 'gives pic of stormie',
    usage: "!storm",
    async execute(message, client, args) {
        message.channel.send(client.storm[Math.floor(Math.random() * client.storm.length)]);
    }
}