// Decoder for OWL electricity monitors
// Part number CMR130
// maybe http://www.automatedhome.co.uk/vbulletin/showthread.php?1974-Electrisave-Owl-Protocol-PC-Interface/page3

/*
11000000010001111011011000000000000000000000000000000000000000000000000000000000000000011110010
c047b60000000000000001e2
11000000010101010011111000000000000000000000000000000000000000000000000000000000000000010001001
c0553e000000000000000111
11000000010111100011011000000000000000000000000000000000000000000000000000000000000000011111110
c05e360000000000000001f6
c0540e000000000000000132
c0540ef000c66000000000f5
c0540e8800b7a80000000100
c0540fe8007fa40000000100

602a07740000ea0000000080
602a07d400258600000000d1
602a07d4006bd60000000039

600a07e4000da58000000013

600a07e4007118400000002
600a07e40023844000000098
600a07e4002f5440000000c5
600a07e4001ebc400000002
 => 3febf017fff5db7fffffffd
decoder_owl.js:79 => 600a07cc00502a40000000f2
decoder_owl.js:79 => 600a076c0074064000000077
decoder_owl.js:79 => 600a07ac007d364000000071
decoder_owl.js:79 => 600a074c00231e4000000095
decoder_owl.js:79 => 600a07ac004721400000003a
decoder_owl.js:79 => 600a0754006af1400000006f
decoder_owl.js:79 => 600a0755004ab740000000ec
decoder_owl.js:79 => 04ffafc257fc52b9ffffffff01
decoder_owl.js:79 => 600a075c00186cc0000000b9
decoder_owl.js:79 => 600a07ec004272c0000000b4
decoder_owl.js:79 => 000009ff5f813ffed393fffffff35
decoder_owl.js:79 => 600a07ec00721ec0000000bd
decoder_owl.js:79 => 600a07ec005ab1c000000014
decoder_owl.js:79 => 600a07d4006e85c0000000d0
decoder_owl.js:79 => 600a07b9005ed7c00000004f
decoder_owl.js:79 => 600a078500509820000000b8
decoder_owl.js:79 => 4ffafc15fff5e6efffffffd51
decoder_owl.js:79 => 600a07d40008862000000028
decoder_owl.js:79 => 600a07cc004dd120000000fc
decoder_owl.js:79 => 600a074c006373200000002b
decoder_owl.js:79 => 0281eb0015a9c8000000323
decoder_owl.js:79 => 600a0779002df2a000000085
decoder_owl.js:79 => 600a07b900504ea000000065
decoder_owl.js:79 => 600a07b9004d99a0000000b7
decoder_owl.js:79 => 600a07540069c5a00000002d
decoder_owl.js:79 => 7ffd80281ed001220e8000000390
decoder_owl.js:79 => 600a07f4001fd3a00000002b
decoder_owl.js:79 => 600a078c0052c7a000000069
decoder_owl.js:79 => 600a070c00179fa000000068
decoder_owl.js:79 => 600a07f40009f0600000009c
decoder_owl.js:79 => 0027fd7e12ffff69e7ffffffd33
decoder_owl.js:79 => 600a077400572460000000c0
decoder_owl.js:79 => 600a078c005e5c60000000a8
decoder_owl.js:79 => 600a070c007ba26000000096
decoder_owl.js:79 => 600a0734004a0a600000002a
decoder_owl.js:79 => 600a07cc006666600000005e
decoder_owl.js:79 => 600a070c00538e600000001a
decoder_owl.js:79 => 600a075c00637e6000000058
decoder_owl.js:79 => 600a071c00083160000000f2
decoder_owl.js:79 => 600a076c006b196000000075
decoder_owl.js:79 => 600a07f4005ee3600000006a
decoder_owl.js:79 => 600a07b4001f3b60000000f7
decoder_owl.js:79 => 0000009ff5f8f3ffefe89fffffff95
decoder_owl.js:79 => 600a070c0066cf600000002
decoder_owl.js:79 => 600a078c00057f600000007a
decoder_owl.js:79 => 600a070c007084e0000000f2
decoder_owl.js:79 => 600a0774006634e000000064
decoder_owl.js:79 => 600a07740038ece0000000b1
decoder_owl.js:79 => 600a0774000f82e0000000d4
decoder_owl.js:79 => 600a07740061eae0000000ee
decoder_owl.js:79 => 600a076c0017b6e00000009b
decoder_owl.js:79 => 600a07b40057c1e00000007e
decoder_owl.js:79 => 600a07b4007171e0000000c9
decoder_owl.js:79 => 600a07b4003499e000000092
decoder_owl.js:79 => 600a070c004e25e000000097
decoder_owl.js:79 => 600a070c0047f5e000000072
decoder_owl.js:79 => 600a07b40050e3e000000001
decoder_owl.js:79 => 600a077400698be0000000d7
decoder_owl.js:79 => 600a07b400323be000000053
decoder_owl.js:79 => 600a072c005f17e000000062
decoder_owl.js:79 => 600a076c0036afe000000030
decoder_owl.js:79 => 600a07bc000a401000000065
decoder_owl.js:79 => 600a07ec005cf010000000dc
decoder_owl.js:79 => 600a0734004064100000001c
decoder_owl.js:79 => 600a073400260c10000000b2
decoder_owl.js:79 => 600a07b400335c100000001e
decoder_owl.js:79 => 600a070c004c0a100000006d
decoder_owl.js:79 => 600a070c002ada1000000033
decoder_owl.js:79 => 600a078c00296610000000db
decoder_owl.js:79 => 600a077400168e100000002
decoder_owl.js:79 => 600a078c00543e10000000fb
decoder_owl.js:79 => 600a07b400788910000000b9
decoder_owl.js:79 => 600a07b40049d910000000dd
decoder_owl.js:79 => 600a07740030651000000077
decoder_owl.js:79 => 600a074c0067a310000000b7
decoder_owl.js:79 => 600a07f4001ddb10000000fb
decoder_owl.js:79 => 0000009ff5f88bfff898efffffffbd
decoder_owl.js:79 => 600a0734007b8f1000000050
decoder_owl.js:79 => 600a0734004a3f100000004d
decoder_owl.js:79 => 600a07d400328890000000e7
decoder_owl.js:79 => 600a07d40066d89000000089
decoder_owl.js:79 => 600a07340055a4900000001f
decoder_owl.js:79 => 3febf057ffa016dfffffff72
decoder_owl.js:79 => 213febf057ff86badffffffe87
decoder_owl.js:79 => 600a079c006ed69000000037
decoder_owl.js:79 => 600a07f4004e1590000000df
decoder_owl.js:79 => 600a07b4007acd900000007f
decoder_owl.js:79 => 600a07cc006b3790000000e5
decoder_owl.js:79 => 600a07b40013c0500000006
decoder_owl.js:79 => 600a070c000a8a50000000e1
decoder_owl.js:79 => 600a07f400753a500000004f
decoder_owl.js:79 => 600a070c0000165000000090
decoder_owl.js:79 => 600a07b40050ce500000005c
decoder_owl.js:79 => 600a07340066be500000005a
decoder_owl.js:79 => 600a07b400253950000000bb
decoder_owl.js:79 => 600a071c0010b7500000009d
decoder_owl.js:79 => 600a071c007f9f5000000073
decoder_owl.js:79 => 600a072c004460d0000000d5
decoder_owl.js:79 => 600a07b40071d8d00000001d
decoder_owl.js:79 => 600a0734006e0cd00000006f
decoder_owl.js:79 => 600a070c003cdad0000000fe
decoder_owl.js:79 => 600a07f4007a66d00000000a
decoder_owl.js:79 => 600a0734004c8ed000000099
decoder_owl.js:79 => 600a0774002309d000000052
decoder_owl.js:79 => 600a076b0071f3d0000000c1
*/

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

(function() {

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
              instant:data[3]+(data[4]<<8),
              accumulated:data[5]+(data[6]<<8)+(data[7]<<16)+(data[8]<<24)+(data[9]<<32),
            });
        }
      }
      code = "";
    }
  });

})();


