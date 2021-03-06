var socket = io.connect("http://localhost:4000/");

//Query DOM
var message = document.getElementById("message");
(handle = document.getElementById("handle")),
  (btn = document.getElementById("send")),
  (output = document.getElementById("output")),
  (feedback = document.getElementById("feedback"));

btn.addEventListener("click", () => {
  socket.emit("chat", {
    message: message.value,
    handle: handle.value,
  });
});

message.addEventListener("keypress", () => {
  socket.emit("typing", handle.value); //sending a typing msg to the server
});
console.log(handle);

//Listening for thhe event coming from the server
socket.on("chat", (data) => {
  feedback.innerHTML = "";
  output.innerHTML +=
    "<p><strong>" + data.handle + ":</strong>" + data.message + "</p>";
});
//+= => on each type -> listen -> and fire it
socket.on("typing", (data) => {
  feedback.innerHTML =
    "<p><em>" + data.handle + "is typing a message...</em></p>";
});
