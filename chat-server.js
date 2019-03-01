var app = require('express')(); 
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', socket => {
	socket.on('chat', msg => {
		io.emit('chat', msg);
	});
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

server.listen(3000);
