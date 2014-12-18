// Code that can be run in Espruino to send data from setWatch to the decoders
// This will run on the Pi - but it does struggle. It needs to be faster...

var fs = require("fs");
var RADIO = D6;
var Decoders = [];
eval(fs.readFileSync("decoders/status_socket.js"));
eval(fs.readFileSync("decoders/owl.js"));


function callback(d) {
  console.log(":::" + JSON.stringify(d));
}

setWatch(function(e) {
 var data = { value : e.state, len : e.time-e.lastTime };
 Decoders.forEach(function(decoder) { decoder(data, callback); });
}, RADIO, { repeat:true, edge:"both", debounce:0.3 });
setInterval("",1000);
