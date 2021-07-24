const discord = require("discord.js");

module.exports = {
    name : 'paypal',
    description: 'create a paypal invoice',
    usage: "!paypal <amount>",
    execute(message, client, args) {
        var amount = !args[0] ? "5.00" : args[0];
        var address = "";
        if (client.config.paypal)
            address = client.config.paypal;
        if (!address)
            return;

        const embed = new discord.RichEmbed()
            .setTitle("Paypal Invoice")
            .setThumbnail("https://cdn.discordapp.com/attachments/694209907611926559/698255123838795786/580b57fcd9996e24bc43c530.png")
            .setColor(1984378);

        embed.addField("Address", address);
        embed.addField("Amount (USD)", "$" + amount);
        embed.setDescription("Please send " + "$" + amount + " to " + address );

        message.channel.send({embed});




    }
}