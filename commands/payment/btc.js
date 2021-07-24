var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet(url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
function sendEmbedMessage(message, amount, btc, currency) {
    const embed = {
        "title": "``Bitcoin to " + currency + "``",
        "color": 15830356,
        "timestamp": new Date(),
        "footer": {
            "text": "BTC to " + currency + " Convert"
        },
        "thumbnail": {
            "url": "https://cdn.discordapp.com/attachments/694209907611926559/696904114130386994/BTC_Logo.png"
        },
        "fields": [
            {
                "name": "***Provided " + currency + " Amount***",
                "value": "```" + amount + "```"
            },
            {
                "name": "***BTC Amount Converted***",
                "value": "```" + btc + "```"
            }
        ]
    };
    message.channel.send({embed});
}
module.exports = {
    name : 'btc-convert',
    description: 'converts btc to desired currency amount',
    usage: "!btc-convert <currency> <amount>",
    execute(message, client, args) {
        var currency = args[0];
        var amount = args[1];

        if (!currency) return;
        if (!amount) return;
        var url = "https://blockchain.info/tobtc?currency=" + currency + "&value=" +amount;
        var btc = httpGet(url);
        if (btc.includes("Parameter")) {
            message.channel.send(btc).then(message => {
                message.delete(2000);
            });
        }
        else {
            sendEmbedMessage(message, amount, btc, currency);
        }
    }
}