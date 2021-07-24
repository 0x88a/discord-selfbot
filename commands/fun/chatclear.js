
module.exports = {
    name : 'chatcolor',
    description: 'clears the chat',
    usage : '!coinflip',
    execute(message, _client, args) {


        let str = "";

        for(let i = 0; i < 100; i++) {
            str += "\n";
        }
    
        console.log(str);

    }
}