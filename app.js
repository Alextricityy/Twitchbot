var tmi=require("tmi.js");

var options={
    options:{
        debug: true
    },
    connection:{
        cluster:"aws",
        reconnect: true
    },
    identity:{
        username:"alextricityybot",
        password: "oauth:q63s4lqc0r52oz0ulmriz0tuuzueha"
    },
    channels:["Alextricityy"]
};
var client= new tmi.client(options);
client.connect();
client.on("connected", function(address, port){
    client.action("Alextricityy", "Hello i am your bot");
    
    
});