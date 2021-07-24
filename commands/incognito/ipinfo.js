var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet(url,key){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.setRequestHeader("X-Key",key);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
function sendEmbedMessage(message, ip, country, isp, vpn) {

    const embed = {
        "title": ip,
        "color": 10389160,
        "timestamp": new Date(),
        "fields": [
            {
                "name": "Country",
                "value": country
            },
            {
                "name": "ISP",
                "value": isp
            },
            {
                "name": "VPN Check",
                "value": vpn
            },
        ]
    };
    message.channel.send({embed})
        .then(message => {
            message.delete(5000);
    });
}
module.exports = {
    name : 'ipinfo',
    description: 'display ip information',
    execute(message, client, args) {
        const ip = args[0];
        var url = 'http://v2.api.iphub.info/ip/' + ip;
        let obj = JSON.parse(httpGet(url, 'Nzk5MTpRUUcxd2NOanpFTVZ5VnBYVzVkaGJ6R0RsRjdjTTFEQw=='));
        var vpn = '';
        console.log(obj);
        if (obj.error) {
            message.channel.send(obj.error) .then (message => {
                message.delete(1000);
            });
            return;
        }
        if (obj.block == 0) {
            vpn = 'Residential or Business IP';
        }
        else if (obj.block == 1) {
            vpn = 'Non-residential IP (hosting provider, proxy, etc...)';
        }
        else if (obj.block == 2) {
            vpn = 'Non-residential & residential IP';
        }
        sendEmbedMessage(message, obj.ip, obj.countryName, obj.isp, vpn);

    }
}