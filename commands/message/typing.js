
module.exports.run = async (msg, client, args) => {


}

module.exports = {
    name:"typing",
    usage:"!typing",
    description:"Infinite typing",
    execute(msg) {
        msg.channel.startTyping()
        msg.react("✅")
    }
}