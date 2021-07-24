module.exports = {
    name : 'listening',
    description: 'set listening status',
    usage: "!listening <status>",
    execute(message, client, args) {

        if (!args[0]) return;
        /*
        2 - listening
        3- streaming
        4- regular status

         */
        client.user.setPresence({
            game: {
                name: null,
                type: null,
            }
        }).then(() => {
            client.user.setPresence({
                game: {
                    name: args[0],
                    type: 2,
                }
            });
        });
    }
}