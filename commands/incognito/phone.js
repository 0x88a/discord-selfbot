var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const request = require("node-superfetch");

function httpGet(url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
module.exports = {
    name: 'phone',
    description: 'phone',
    execute(message, client, args) {
        message.edit("Searching....").then(msg => {
            var phone = content;
            var api_url = "http://apilayer.net/api/validate?access_key=5d7e7579adbe49047f70f6f9490ae3f2&number=" + phone + "&country_code=&format=1";
            console.log(api_url);
            var data = JSON.parse(httpGet(api_url));

            request.get(api_url).then((res) => {
                var number = data.number;
                if (!number) number ="Unknown";
                var country = data.country_name;
                if (!country) country = "Unknown";
                // var region = data.details.region;
                // if (!region) region = "Unknown";


                var carrier = data.carrier;
                if (!carrier) carrier = "Unknown";
                var line_type = data.line_type;
                if (!line_type) provider = "Unknown";

                let embed = new discord.RichEmbed()
                    .setTitle("Phone Number Information")
                    .addField("Number", number, true)
                    .addField("Country", country, true)
                    .addField("Carrier", carrier, true)
                    .addField("Line Type", line_type.toUpperCase(), true);

                if(data.location) embed.addField("Location", data.location, true);
                message.channel.send({embed});
            }).catch(() => {
                msg.edit("Error occured").then(mes => {
                    mes.delete(5000);
                });
                return;
            })
        });


    }
}