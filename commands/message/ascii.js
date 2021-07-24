let figlet = require('figlet');
module.exports = {
    name : 'ascii',
	description: 'converts text to ascii',
	usage: "ascii <text>",
    execute(message, client, args) {
        figlet(args, function(err, data) {
   		 if (err) {
        		console.log('Something went wrong...');
        		console.dir(err);
        		return;
    		}
    		message.channel.send("```" + data + "```");
	});
    }
}