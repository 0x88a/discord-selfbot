function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

module.exports = {
    name : 'password',
    description: 'generates a random password with a specified length',
    usage: "!password <length>",
    execute(message, client, args) {
            if (!args){
                message.channel.send("You did not provide a length.");
            } else {
                let pass = makeid(parseInt(args));
                console.log(pass)
                message.channel.send(pass);
            }
    }
}