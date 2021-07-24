module.exports = {
    name : 'copy',
    description: 'copy',
    usage: "!copy",
    execute(message, client, args) {

        console.log(args[0]);

        if(!args[0]) return;

        if(!client.guilds.get(args[0])) return;

        let guild = client.guilds.get(args[0]);

        const toClone = {
            roles: [], channels: [], serverIcon: null, serverName: null, afkChannel: null, verificationLevel: null, reigon: null
        };

        const channels = message.guild.channels.values();
        for(const channel of channels) {
            toClone.channels.push({ 
                type: channel.type,
                topic: channel.topic,
                name: channel.name,
                rateLimitPerUser: channel.rateLimitPerUser,
                position: channel.position,
                parent: channel.parent,
                permissionsOverwrites: channel.permissionOverwrites.map(v => ({ id: v.id, allow: v.allow, deny: v.deny })),
                nsfw: channel.nsfw,
                userLimit: channels.userLimit
            })
            channel.delete();
        };

        toClone.afkChannel = message.guild.afkChannelID;
        toClone.serverIcon = message.guild.iconURL;
        toClone.serverName = message.guild.name;

        toClone.verificationLevel = message.guild.verificationLevel;
        toClone.region = message.guild.region;

        toClone.roles = message.guild.roles;
        
        console.log(toClone);

        message.channel.send("Sending over data in 5 seconds...").then((m) => m.delete(5000));

        setTimeout(async () => {
            for(const role of toClone.roles.values()) {
                if(role.name === "@everyone") continue;
                await guild.createRole({
                    color: role.color,
                    hoist: role.hoist,
                    mentionable: role.mentionable,
                    name: role.name,
                    permissions: role.permissions,
                    position: role.calculatedPosition
                });
            };

            for(const channel of toClone.channels) {
                await guild.createChannel(channel.name, {
                    bitrate: 8000,
                    nsfw: channel.nsfw,
                    permissionOverwrites: channel.permissionOverwrites == undefined ? undefined : channel.permissionOverwrites.map(v => {
                        const target = message.guild.roles.get(v,id);
                        if(!target) return;
                        return {
                            id: guild.roles.find(r => r.name === target.name),
                            allow: v.allow,
                            deny: v.deny
                        };
                    }).filter(v => v),
                    position: channel.position,
                    rateLimitPerUser: channel.rateLimitPerUser,
                    userLimit: channel.userLimit,
                    topic: channel.topic,
                    type: channel.type
                }).then(c => {
                    channel.id = c.id;
                }).catch(console.error);
            }

            for(const channel of toClone.channels.filter(v => v.type !== "category")) {
                const targetChannel = guild.channels.get(channel.id);
                if(!targetChannel) continue;
                await targetChannel.setParent(guild.channels.find(v => channel.parent && v.name === channel.parent.name && v.type === "category"));
            }

            message.channel.send(":white_check_mark: Task was successful.");
        }, 5000);
    }
}