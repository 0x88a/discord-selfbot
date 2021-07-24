module.exports = {
    name:"strike",
    description:"Puts a strike through your message.",
    usage:"*strike <text>",
    execute(message, client, args) {
        if(!args[0]) return;
        let text = args.join(" ")
        if(text.length > 2000) return message.channel.send('text may not exceed 2000 characters')
    
        message.channel.send(`~~${text}~~`)
      }
}