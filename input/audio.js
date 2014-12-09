var soundInputPolarity = -1;

function audioInit(callback) {
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
  var context = new AudioContext();

  if (!navigator.getUserMedia) {
    alert("Error: getUserMedia not supported!");
    return;
  }

  var inputNode = context.createScriptProcessor(4096, 1/*in*/, 1/*out*/);
  window.dontGarbageCollectMePlease = inputNode;
  var sampleRate = context.sampleRate;
  console.log("Audio Sample rate : "+sampleRate);

  var sampleCounter = 0;
  var lastBitValue = 0;
  var minValue = 0;

  inputNode.onaudioprocess = function(e) { 
    var data = e.inputBuffer.getChannelData(0);
    for (var i = 0; i < data.length; ++i) {
      var dataValue = data[i]*soundInputPolarity;
      // work out what our bit is... 
      // keep track of the minimum (actually the max - sig is inverted)
      // then when signal is a bit above(below) that, it's a 1    
      var value = dataValue < (minValue+0.1);    
      minValue += 0.002;
      if (dataValue < minValue) minValue = dataValue;
      // if the value has changed, reset our sample counter
      if (value!=lastBitValue) {
        if (sampleCounter>2) // strip out noise
          callback({value:lastBitValue,len:sampleCounter/sampleRate});
        sampleCounter = 0;
      }
      sampleCounter++;
      lastBitValue = value;
    }
  };

  navigator.getUserMedia({
    video:false,
    audio:{
      mandatory:[],
      optional:[{ echoCancellation:false },{sampleRate:44100}]
    }
  }, function(stream) {
    var inputStream = context.createMediaStreamSource(stream);
    inputStream.connect(inputNode);
    inputNode.connect(context.destination);
  }, function(e) {
    alert('Error getting audio');
    console.log(e);
  });
}  
