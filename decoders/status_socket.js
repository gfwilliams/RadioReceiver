// Decoder for cheap STATUS sockets, transmitter codename RCT-08
// http://www.espruino.com/Remote+Control+Sockets

(function() {

  var code = "";

  Decoders.push(function (data, callback) {
    if (data.value) {
      if (data.len>0.00025 && data.len<0.00035)
        code += "0";
      else if (data.len>0.00085 && data.len<0.00095)
        code += "1";
      else {
        if (code.length==23) {
          callback({
            device:"RCT-08",
            id:parseInt(code.substr(0,18),2),
            command:parseInt(code.substr(-5),2),
          });
        }
        code = "";
      }
    }
  });

})();
