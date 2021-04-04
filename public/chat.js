var socket = io.connect("http://localhost:4000/");

//Query DOM
var message = document.getElementById("message");
(handle = document.getElementById("handle")),
  (btn = document.getElementById("send")),
  (output = document.getElementById("output"));

btn.addEventListener("click", () => {
  socket.emit("chat", {
    message: message.value,
    handle: handle.value,
  });
});

//Listening for thhe event coming from the server
socket.on("chat", (data) => {
  output.innerHTML +=
    "<p><strong>" + data.handle + ":</strong>" + data.message + "</p>";
});
