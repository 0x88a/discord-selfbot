var fact = require('random-facts');
module.exports = {
    name : 'eat-pant',
    description: 'do eat pant.exe',
    execute(message, client, args) {

        message.edit("https://raw.githubusercontent.com/dragonfire535/xiao/master/assets/images/eat-pant.png").catch(console.error);
    }
}