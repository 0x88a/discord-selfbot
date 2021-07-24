var fact = require('random-facts');
module.exports = {
    name : 'fact',
    description: 'random fact',
    usage : '!fact',
    execute(message) {

        message.edit(fact.randomFact()).catch(console.error);
    }
}