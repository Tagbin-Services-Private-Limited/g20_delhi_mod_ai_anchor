const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: '*', // Adjust this to your frontend URL
    methods: ['GET', 'POST'],
    credentials: true // If your app uses cookies or other credentials
  }
});

app.use(cors()); // Allow all origins, you can configure this as needed
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });

  socket.on('send', (msg) => {
    console.log('Message:', msg);
    io.emit('receive', msg); // Broadcast the message to all connected clients
  });
  socket.on('camera', (msg) => {
    console.log('Message:', msg);
    io.emit('cam', msg); // Broadcast the message to all connected clients
  });
});

server.listen(8000, () => {
  console.log('Server is listening on port 8000');
});
