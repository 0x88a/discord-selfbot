// for(let i = 0; i < 10; i++) {
//     console.log("https://prnt.sc/" +generate());
// }

module.exports = {
    name : 'rimg',
    description: 'gives u a random image',
    execute(message, client, args) {
        function generate() {
            let result = '';
            let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            let charLength = characters.length;
        
            for(let i = 0; i < 2; i++) {
                result += characters.charAt(Math.floor(Math.random() * charLength));
            }
        
            let num = "0123456789";
            let numLength = num.length;
        
            for(let i = 0; i < 4; i++) {
                result += num.charAt(Math.floor(Math.random() * numLength));
            }
        
            return result;
        }

        message.channel.send("https://prnt.sc/" +generate());
    }
}