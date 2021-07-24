module.exports = {
    name : 'coinflip',
    description: 'heads or tails',
    usage : '!coinflip',
    execute(message) {


        let options = ["Tails", "Heads"];

        let random_index = Math.round(Math.random() * options.length);

        message.channel.send(options[random_index]).catch();

    }
}