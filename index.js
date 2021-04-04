//requiring the functions
var express = require("express");
var socket = require("socket.io");

//App setup
var app = express(); //here we invoked the function

//creating a server
//listen to requests on that port (on the browser)
var server = app.listen(4000, () => {
  console.log("server is up and running and listening on port 4000 ");
});

//serving static files
app.use(express.static("public"));

//socket instance
var io = socket(server);

io.on("connection", (socket) => {
  //unique id printed of each socket
  console.log("made socket connection", socket.id);

  socket.on("chat", function (data) {
    io.emit("chat", data);
  });
});

//down the websocket to the server
