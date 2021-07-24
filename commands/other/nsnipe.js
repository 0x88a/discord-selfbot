module.exports = {
        name : 'nsnipe',
        description: 'Snipes the dick off any discord code.',
        execute(message, client, args) {
          console.log(client);
          if(!client.fuckingNitroSniper.get(client.user.id)) {
            client.fuckingNitroSniper.set(client.user.id, "hi");
            message.channel.send('Turned on nitro sniper fucking mode.')
            return;
          } else {
            client.fuckingNitroSniper.delete(client.user.id)
            message.channel.send('Turned off nitro sniper fucking mode.')
                return;
          }
        }
    }
