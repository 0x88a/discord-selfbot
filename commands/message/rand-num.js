
module.exports = {
    name:"rand-num",
    description: "Selects a random number from two pairs.",
    usage:"*rand-num <number1> <number2>",
    execute(msg, args) {
        let num1 = parseInt(args[0])
        let num2 = parseInt(args[1])
    
      
        if (isNaN(args[0]) || isNaN(args[1])) return msg.reply('I need two numbers!')
    
        let random = Math.floor(Math.random() * num2) + num1;
        msg.channel.send('I choose ' + random)
     
    }
}