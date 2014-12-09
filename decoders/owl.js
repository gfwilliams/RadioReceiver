// Decoder for OWL electricity monitors
// Part number CMR130
// maybe:
// http://www.automatedhome.co.uk/vbulletin/showthread.php?1974-Electrisave-Owl-Protocol-PC-Interface/page3
// https://www.pitt-pladdy.com/blog/_20131206-183013_0000_Owl_Energy_Monitor_Protocol_CMR119_/

(function() {

  function deManchesterify(code) {
    var result = "";
    var lastZero = false;
    var state = false;
    for (var i=0;i<code.length;i++) {
      if (code[i]=="1") {
        //if (lastZero) console.log("Manchester decode error in '"+code+"'["+i+"]");
        lastZero = false;
        state = !state;
        result += state?"1":"0";
      } else if (code[i]=="0") {
        if (lastZero) {
          lastZero = false;
          result += state?"1":"0";
        } else {
          lastZero = true;
        }
      } 
    }
    return result;
  }

  function reverseString(s) {
    return s.split("").reverse().join("");
  }

  function toBytes(code) {
    var r = [];
    for (var i=0;i<code.length;i+=8) {
      r.push(parseInt(reverseString(code.substr(i,8)),2));
    }
   return r;
  }

  function toAscii(bytes) {
    return bytes.map(function(byteVal) {
      return ("00"+byteVal.toString(16)).substr(-2);
    }).join(" ");
  }

  var code = "";

  Decoders.push(function (data, callback) {
    if (data.len>0.00030 && data.len<0.00065) // .475
      code += "0";
    else if (data.len>0.00080 && data.len<0.00115) // .975
      code += "1";
    else { 
      if (code.length>20) {
        // filter all the junk off the front
        while (code.indexOf("1")>0 || code.substr(0,10)=="1000000000") {
          code=code.substr(code.indexOf("1"));
          while (code.substr(0,10)=="1000000000")
            code = code.substr(10);
        }
        code = code.substr(1); // pull off the leading 1
        // analyse
        var c = deManchesterify(code);
        if (c.length>=89) {
          var data = toBytes("0"+c);
//          console.log(">>",code);
//          console.log("->",c);
//          console.log("=>",toAscii(data));
          if (data.length==12) 
            callback({
              device:"OWL-CMR130",
              id:data[1]+(data[2]<<8),
              instant:(data[3]+(data[4]<<8))*16, // watts
              accumulated:data[5]+(data[6]<<8)+(data[7]<<16)+(data[8]<<24)+(data[9]<<32), // what units ?
            });
        }
      }
      code = "";
    }
  });

})();


