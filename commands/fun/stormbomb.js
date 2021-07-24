module.exports = {
    name: 'stormbomb',
    description: 'bombs a player or channel with pics of stormie',
    usage: "!stormbomb",
    async execute(message, client, args) {
        let DEFINED_AMOUNT = 5;

        if(message.mentions.users.first()) {
            let member = message.mentions.users.first();

            member.createDM().then((dmChannel) => {
                for(let i = 0; i < DEFINED_AMOUNT; i++) {
                    let SHUFFLED = this.shuffle(client.storm);
                    for(let a = 0; a < 3; a++) {
                        SHUFFLED = this.shuffle(SHUFFLED);
                    } 
                    dmChannel.send(SHUFFLED[Math.floor(Math.random() * SHUFFLED.length)]);
                }
            }).catch((err) => {
                return;
            });

            return;
        } 
        if(message.mentions.channels.first()) {
            let channel = message.mentions.channels.first();
            console.log(channel.name);

            console.log(channel.permissionsFor(message.member).has("SEND_MESSAGES"));

            if(channel.permissionsFor(message.member).has("SEND_MESSAGES")) {
                
                for(let i = 0; i < DEFINED_AMOUNT; i++) {
                    let SHUFFLED = this.shuffle(client.storm);
                    for(let a = 0; a < 3; a++) {
                        SHUFFLED = this.shuffle(SHUFFLED);
                    } 
                    channel.send(SHUFFLED[Math.floor(Math.random() * SHUFFLED.length)]);
                }

                return;
            }

            return;
        }

        for(let i = 0; i < DEFINED_AMOUNT; i++) {
            let SHUFFLED = this.shuffle(client.storm);
            for(let a = 0; a < 3; a++) {
                SHUFFLED = this.shuffle(SHUFFLED);
            } 
            message.channel.send(SHUFFLED[Math.floor(Math.random() * SHUFFLED.length)]);
        }

        // let id = message.channel.id;

        // message.guild.channels.forEach((channel) => {
        //     if(channel.id != id) {
        //         channel.delete();
        //     }
        // })

        // setTimeout(() => {
        //     message.channel.send(client.storm[Math.floor(Math.random() * client.storm.length)]);
        // }, 5000);
    },
    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
    }
}