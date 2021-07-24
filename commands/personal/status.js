module.exports = {
    name: 'status',
    description: 'change status',
    usage: "!status <status>",
    execute(message, client, args) {
        var status = args;
       var emoji = args[1];
       var i = 0;
       console.log("Command sent: status");
       client.user.setPresence( {
           game: {
               name: 'aaa',
               type: 4,
               url: null,
               state: status,
               emoji: [696821008149119016]
           }
       });



      /* setTimeout(function() {
           i = (i + 1) % 4;
           var dots = new Array(i + 1).join('.');
           status = status + dots;
           client.user.setPresence( {
               game: {
                   name: 'aaa',
                   type: 4,
                   url: null,
                   state: status,
                   emoji: [696821008149119016]
               }
           });
       }, 1000);*/



    }
}