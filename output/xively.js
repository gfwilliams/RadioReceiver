function putXively(feedID, apiKey, data) {
  var content = {
    version : "1.0.0",
    datastreams : [ 
    ]
  };
  for (var i in data)
    content.datastreams.push( { id : i, current_value : data[i] });
  var xr = new XMLHttpRequest();
  xr.open("PUT", "http://api.xively.com/v2/feeds/"+feedID, true);
  xr.setRequestHeader("X-ApiKey",apiKey);
  xr.send(JSON.stringify(content));
}


