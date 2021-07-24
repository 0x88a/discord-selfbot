//https://raw.githubusercontent.com/dragonfire535/xiao/master/assets/images/fly.png

var fact = require('random-facts');
module.exports = {
    name : 'fly',
    description: 'do fly buzz',
    execute(message, client, args) {

        message.edit("https://raw.githubusercontent.com/dragonfire535/xiao/master/assets/images/fly.png").catch(console.error);
    }
}