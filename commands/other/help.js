const fs = require('fs')
const { RichEmbed, Message, DiscordAPIError } = require('discord.js')
const { readdirSync } = require("fs");
module.exports = {
    name : 'help',
    description: 'help!',
    execute(message, client, args) {
        message.delete();

        let categories = [];

        client.commands.forEach((command) => {
            if(!categories.includes(command.category)) categories.push(command.category);
        });

        if(!args[0]) {
            let embed = new RichEmbed();

            embed.setColor("PURPLE");
    
            embed.setDescription("Your a dissapointment.");
    
            for(const category in categories) {
                let captial = categories[category].toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
                embed.addField(captial, client.config.prefix + "help " + categories[category], true)
            }
    
            return message.channel.send(embed);
        }

        let categoryList = args[0];

        if(!categories.includes(categoryList.toLowerCase())) {

            if(client.commands.has(args[0])) {
                let command = client.commands.get(args[0]);
                let embed = new RichEmbed();

                embed.setColor("PURPLE");
                embed.addField("Name", args[0], true);
                embed.addField("Description", command.description, true);
                embed.addField("Category", command.category, true);
                
                return message.channel.send(embed);
            }

            return;
        }

        let embed = new RichEmbed();

        embed.setColor("PURPLE");

        let commandsInCategory = client.commands.filter(c => c.category === categoryList);

        embed.setDescription(commandsInCategory.map(c => "`" + c.name + "`").join(", "));
        
        return message.channel.send(embed);

    }
}
