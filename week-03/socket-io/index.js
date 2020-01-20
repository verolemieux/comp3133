var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connect', function(socket){
    console.log('Connection accepted.');
    socket.on('disconnect', function(){
        console.log('Disconnected...');
    })
})

io.on('connect', function(socket){
    socket.on('chat message', function(msg){
        io.emit('Received message: ', msg);
    })
})

io.on('connection', function(socket){
    socket.broadcast.emit('hi')
})

http.listen(8080, function(){
  console.log('listening on *:8080');
});