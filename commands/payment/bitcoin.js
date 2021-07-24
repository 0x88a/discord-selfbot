var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const discord = require("discord.js");

function httpGet(url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
module.exports = {
    name : 'btc',
    description: 'create a bitcoin invoice',
    usage: "!btc <amount>",
    execute(message, client, args) {
        var amount = !args[0] ? "5.00" : args[0];
        var address = "";
        if (client.config.btc)
            address = client.config.btc;
        if (!address)
            return;

        const embed = new discord.RichEmbed()
            .setTitle("Bitcoin Invoice")
            .setThumbnail("https://cdn.discordapp.com/attachments/694209907611926559/696904114130386994/BTC_Logo.png")
            .setColor(15830356);

        var url = "https://blockchain.info/stats?format=json";
        var btc_convert = httpGet(url);
        var stats = JSON.parse(btc_convert);
        var btcValue = stats.market_price_usd;

        btc_convert = amount / btcValue;

        if (!btc_convert)
            return;
        embed.addField("Address", address);
        embed.addField("Amount (USD)", "$" + amount);
        embed.addField("Bitcoin Amount", btc_convert);
        embed.setDescription("Please send " + btc_convert + "BTC to " + address );

        message.channel.send({embed});




    }
}