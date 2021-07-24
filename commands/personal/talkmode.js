module.exports = {
    name: 'talkmode',
    description: 'does something',
    usage: "!talkmode [talkMode]",
    execute(message, client, args) {
        if(!args[0]) return;
        if(!client.validTalkModes.includes(args[0])) {
            console.log(":x: Not a valid talk mode, you currently have " + client.functionIsCool.size + " talk modes available.");
            return;
        }


        if(client.functionIsCool.size >= 2) {
            console.log(":x: You are at the maximum of talk-modes.");
            return;
        }

        let current = client.functionIsCool.get("types");

        if(current == null) {
            current = [];
        }

        if(current.includes(args[0])) {
            current.remove(args[0]);
        } else {
            current.push(args[0]);
        }
        client.functionIsCool.set("types", current);
        message.react("✅");
    }
}