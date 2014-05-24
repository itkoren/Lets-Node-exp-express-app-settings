var http = require("http");
var express = require("express");

var app = express();

app.enable("caching");
app.set("port", process.env.PORT || 8000);

if ("development" === app.get("env")) {
    // Gets called in the absence of NODE_ENV too!
    app.enable("debugging");
}
else if ("production" === app.get("env")) {
    app.enable("optimizing");
    app.disable("x-powered-by");
}

var server = http.createServer(app).listen(app.get("port"), function(){
 console.log("Express Server listening on port", server.address().port);
 console.log("Caching:" + app.get("caching"));
 console.log("Debugging:" + app.get("debugging"));
 console.log("Optimizing:" + app.get("optimizing"));
});