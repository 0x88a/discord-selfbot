function getUserFromMention(mention, client) {
    if (!mention) return;

    if (mention.startsWith('<@') && mention.endsWith('>')) {
        mention = mention.slice(2, -1);

        if (mention.startsWith('!')) {
            mention = mention.slice(1);
        }

        return client.users.get(mention);
    }
}
module.exports = {
    name : 'ghostping',
    description: 'quicky ping a user then delete the message',
    execute(message, args, client) {
    }
}