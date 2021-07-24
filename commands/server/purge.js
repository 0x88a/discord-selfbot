module.exports = {
    name : 'purge',
    description: 'purge specified amount of messages',
    usage: "!purge <amount>",
    execute(message, client, args) {

       if (!args[0]) return;

       if (isNaN(args[0])) return;

       message.channel.fetchMessages({limit: parseInt(args[0]) + 1}).then(message => {
          let array = message.array();
          array = array.filter(m => m.author.id === client.user.id);
          array.length = parseInt(args[0]) + 1;
          array.map(m => m.delete().catch(console.error));

       });

    }
}