const translate = require('translate-google')
module.exports = {
    name : 'translate',
    description: 'detects language and translates text. Usage: <keycode> <message>',
    execute(msg, client, args) {
        let lang = args[0];
        let text = args.join(" ").replace(lang, "");
        
        if(!text) return msg.reply('I need some text to translate!')
      
        if(text > 2000) return msg.reply('text may not exceed 2000 chars.')
        translate(text.trimLeft(), { to: args[0]}).then(res => {
            msg.channel.send(res)
        }).catch(e => console.log(e))
    }
}