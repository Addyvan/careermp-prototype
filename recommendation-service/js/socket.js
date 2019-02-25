const socket = new WebSocket('ws://localhost:8888');

socket.addEventListener('message', function (event) {
    var predictions = JSON.parse(event.data);
    var i = 1;
    for (key in predictions) {
        document.getElementById(i.toString()).innerHTML = key;
        i++;
    }
});

var send_message_to_socket = function (message) {
    console.log("sending message");
    socket.send(message);
}