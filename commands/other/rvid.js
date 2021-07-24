// for(let i = 0; i < 10; i++) {
//     console.log("https://prnt.sc/" +generate());
// }
const youtube = require("youtube-random-video");

module.exports = {
    name : 'rvid',
    description: 'gives u a random youtube video',
    execute(message, client, discord) {
        youtube.getRandomVid(process.env.GOOGLE_KEY, function(err, data) {
            if(err) console.log(err);
            console.log(data);

            message.channel.send("https://www.youtube.com/watch?v=" + data.id.videoId);
        })
    }
}