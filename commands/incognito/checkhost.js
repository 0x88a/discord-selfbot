var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet(url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
module.exports = {
    name : 'check-host',
    description: 'retrieves information about and ip address or website',
    execute(message, client, args) {
        var mode = args[0];
        var info = args[1];

        if (!mode || !info) return;

        if (mode == "info") {
            var info = httpGet("https://check-host.net/check-tcp?host=smtp://gmail.com&max_nodes=1");
            console.log(info);
        }
    }
}