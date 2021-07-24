require("dotenv").config();

const Discord = require('discord.js');
const _client = new Discord.Client();
const fs = require('fs');
const ascii = require("figlet");

const { sep, join } = require("path");
if(!fs.existsSync(join(__dirname, "config.json"))) {
    start.setup();
    return;
}

const config = require("./config.json");
const proxyOptions = { 
    username: config.proxy.username, 
    config.proxy.password, 
    config.proxy.server, 
    config.proxy.port 
}

if(config["token"] == null || config["prefix"] == null) {
    start.setup();
    return;
}

const ping = require('net-ping');

let commandAliases;
const talk = require("talk-like-a")
const storm = require("./storm.json");

const alexa = require("alexa-bot-api");
const chatbot = new alexa("aw2plm")//free access key for ctk channel

_client.config = config;
_client.commandAliases = commandAliases;
_client.storm = storm;
var prefix = config.prefix;
const token = config.token;
var crypto = require('crypto');
const logSymbols = require("log-symbols");
var data = token;
var key = "315a5504d921f8327f73a356d2bbcbf1";
var auto;

_client.on('error', () => {
console.log;

});
_client.commands = new Discord.Collection();
_client.aliases = new Discord.Collection();

_client.on('ready', () => {
_client.dankmemer = new Discord.Collection()
_client.fuckingNitroSniper = new Discord.Collection();
_client.owobot = new Discord.Collection()
_client.emotemode = new Discord.Collection()
_client.gwSniper = new Discord.Collection();
_client.autodelete = new Discord.Collection();
_client.afkmode = new Discord.Collection();
_client.caplockmode = new Discord.Collection();
_client.functionIsCool = new Discord.Collection();
_client.slotbot = new Discord.Collection();
_client.autoreply = new Discord.Collection();
console.log(`started` );

try {
    commandAliases = JSON.parse(fs.readFileSync("./aliases.json"));
} catch (err) {

}
});


const load = (dir = "./commands") => {
    fs.readdirSync(dir).forEach(dirs => {
        const commands = fs.readdirSync(`${dir}${sep}${dirs}${sep}`).filter(files => files.endsWith(".js"));

        for(const file of commands) {
            const pull = require(`${dir}/${dirs}/${file}`);

            if(typeof(pull.name) === "string") {
                if(_client.commands.get(pull.name)) {
                    console.log(_client.commands.get(pull.name));
                    return console.log("Two or more commands have the same name " + pull.name + " (" + dir + "/" + dirs + " | " + file + "| " + _client.commands.get(pull.name).name + ")");
                } else {
                    pull.category = dirs;
                    _client.commands.set(pull.name, pull);
                }
            } else {
                console.log("There was a issue running a command in " + dir + dir);
                continue;
            }

            if(pull.aliases && typeof(pull.aliases) === "object") {
                pull.aliases.forEach(alias => {
                    if(_client.aliases.get(alias)) return;
                    _client.aliases.set(alias, pull.name);
                });
            }
        }
    })
};

load();

_client.on('message', message => {
    if(message.author.bot) return;

    let code = message.content.match(/discord\.gift\/[^\s]+/gmi);

    if(message.author.id !== _client.user.id) {

        let validbots = ["294882584201003009", "673918978178940951"];

        if(validbots.includes(message.author.id)) {
            if(_client.gwSniper.get(_client.user.id)) {
                message.react("🎉");
            }
        }

        if(!message.author.bot) {
            if(_client.autoreply.get(_client.user.id) && message.channel.id === '811392367419719740') {
                chatbot.getReply(message.content).then(r => {
                    console.log(message.content)
                    message.channel.send(r);
                });
            }
        }

        return;
    }

    if(_client.functionIsCool.get("types") == null) {
        _client.functionIsCool.set("types", []);
    }

    if(_client.fuckingNitroSniper.get(_client.user.id)) {
        if(code) {
            for (let i = 0; i < code.length; i++) {
                let c = code[i].replace('discord.gift/', '')
                request.post(`https://discord.com/api/v6/entitlements/gift-codes/${c}/redeem`, {
                  headers: {
                    "authorization": _client.token,
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36"
                  }
                }, (err, res, b) => {
                })
              }
        }
    }

    if(_client.functionIsCool.get("types").length != 0) {
        let str = "";
        _client.functionIsCool.get("types").forEach(type => {
            if(str == "") {
                str = _client.talkModeToggle(type, message.content);
            } else {
                str = _client.talkModeToggle(type, str);
            }
            console.log(str);
        });
        message.edit(str);
    }

    if(_client.caplockmode.get(_client.user.id)) {
        message.edit(message.content.toUpperCase());
    }

    if(_client.autodelete.get(_client.user.id)) {
        let timeout = _client.autodelete.get(_client.user.id);
        if(message != null) message.delete(timeout);
    }

    if(message.channel.type === "dm") {
        if(_client.afkmode.get(_client.user.id)) {
            message.channel.send(_client.afkmode.get(_client.user.id));
            return;
        }
    }

    if(message.content.indexOf(prefix) !== 0) {
        if(message.content.startsWith(":") && message.content.endsWith(":")) {
            if(_client.emotemode.get(_client.user.id)) {
                if(fs.existsSync(join(__dirname, "emojis", message.guild.id + "-" + message.content.split(":").join(""))) + ".png") {
                    message.channel.send({ files: [ join(__dirname, "emojis", message.guild.id + "-" + message.content.split(":").join("")) + ".png" ] })
                    if(message != null) message.delete();
                }
            }
        }
    } else {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
    
        const cmd = _client.commands.get(command);
    
        if(!cmd) {

            try {
                commandAliases = JSON.parse(fs.readFileSync("./aliases.json"));
            } catch (err) {
            
            }
            
            let isMatch;
            let data = {};

            for(const thing in commandAliases) {
                commandAliases[thing].forEach((key) => {
                    if(!isMatch && key.toLowerCase() == command) {
                        isMatch = true;
                        data['name'] = thing;
                        data['instanceOf'] = key;
                    }
                })
            }

            if(isMatch && _client.commands.has(data['name'])) {
                console.log(data);

                _client.commands.get(data['name']).execute(message, _client, args);

            }

            let aliasCommands = JSON.parse(fs.readFileSync("./commands.json"));
            let isAliasCommandFound = false;
            let aliasCommandData;

            for(const key in aliasCommands) {
                if(aliasCommands[key].name === command) {
                    isAliasCommandFound = true;
                    aliasCommandData = aliasCommands[key];
                }
            }

            if(isAliasCommandFound) {
                if(aliasCommandData.type === "embed") {
                    let embed = new Discord.RichEmbed();
                    
                    embed.setDescription(aliasCommandData.data.description === null ? "." : aliasCommandData.data.description);
                    embed.setTitle(aliasCommandData.data.title === null ? "." : aliasCommandData.data.title);

                    message.edit(embed);
                } else if(aliasCommandData.type === "message") {
                    message.edit(aliasCommandData.message);
                } else {
                    if(aliasCommandData.data.images.length === 0) return;
                    let random = aliasCommandData.data.images[Math.floor(Math.random() * aliasCommandData.data.images.length)];
                    message.edit(random);
                }
            }

            return;
        }
    
        cmd.execute(message, _client, args);
    }
})


_client.generateEmbed = function(start) {
    const current = Array.from(_client.commands).slice(start, start + 10);

    const embed = new Discord.RichEmbed().setTitle(`Showing commands ${start + 1} - ${start + current.length} out of ${_client.commands.length}`);
    let str = "";

    current.forEach(command => {
        str += `#${Array.from(_client.commands).indexOf(command) + 1} ` + command.name + ` | ` + command.category;
    });
    embed.setDescription(str);
    embed.setColor("GREEN");
    embed.setFooter("If you wish to check information on a exact command, use " + _client.config.prefix + "help [command]");

    return embed;
}

_client.validUrl = function(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }

_client.validTalkModes = ["lolchat", "b1ff", "censor", "chef", "cockney", "eleet", "fudd", "jethro", "jibberish", "ken", "kenny", "ky00te", "nethackify", "newspeak", "nyc", "pirate", "rasterman", "scottish", "scramble", "spammer", "studly", "uniencode", "upsidedown"];

_client.talkModeToggle = function(type, text) {
    if(type === "lolchat") return talk.LOLCAT(text); 
    if(type === "b1ff") return talk.b1ff(text); 
    if(type === "censor") return talk.censor(text); 
    if(type === "chef") return talk.chef(text); 
    if(type === "cockney") return talk.cockney(text); 
    if(type === "eleet") return talk.eleet(text); 
    if(type === "fudd") return talk.fudd(text); 
    if(type === "jethro") return talk.jethro(text); 
    if(type === "jibberish") return talk.jibberish(text); 
    if(type === "ken") return talk.ken(text); 
    if(type === "kenny") return talk.kenny(text); 
    if(type === "klaus") return talk.klaus(text); 
    if(type === "ky00te") return talk.ky00te(text); 
    if(type === "nethackify") return talk.nethackify(text); 
    if(type === "newspeak") return talk.newspeak(text); 
    if(type === "nyc") return talk.nyc(text); 
    if(type === "pirate") return talk.pirate(text); 
    if(type === "rasterman") return talk.rasterman(text); 
    if(type === "scottish") return talk.scottish(text); 
    if(type === "scramble") return talk.scramble(text); 
    if(type === "spammer") return talk.spammer(text); 
    if(type === "studly") return talk.studly(text); 
    if(type === "uniencode") return talk.uniencode(text); 
    if(type === "upsidedown") return talk.upsidedown(text); 
}

_client.on("error", (e) => {
    const errorWebhook = new Discord.WebhookClient(id[0], id[1]);
    errorWebhook.send(":x:" + e.stack).catch((e1) => {
        console.trace(" Could not connect to webhook.");
        console.log(e1);
    })    
})

_client.login(config.token)
