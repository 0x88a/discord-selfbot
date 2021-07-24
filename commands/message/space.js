module.exports = {
    name : 'space',
    description: 'spaces out text',
    execute(message, client, args) {
        if (args.length < 1)
            return;

        var amount = 2;
        if (!isNaN(args[0])) {
            amount = parseInt(args[0]);
            (amount < 1) && (amount = 1);
            (amount > 15) && (amount = 15);
            args = args.slice(1);
        }
        message.channel.send(args.join(' '.repeat(amount / 2)).split('').join(' '.repeat(amount)));
    }
}