const { replaceResultTransformer } = require("common-tags");
const { cpuUsage } = require("process");

module.exports = {
    name : 'spam',
    description: 'spam message x amount of times. spam <message> <count>',
    execute(msg, client, args) {
        let amount = args[0];
        let message = args.join(" ")
        
        if(amount.length === null || message === null) return;
        if(!amount || message)
            for(let i = 0; i < parseInt(amount); i++) {
                msg.channel.send(message.slice(amount.length));
            }
    }
}