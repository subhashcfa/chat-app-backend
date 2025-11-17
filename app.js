var express = require('express');
var app = express();
var http=require("http");
var { Server }=  require("socket.io");
var route=require("./routes/router");
var cors=require("cors");
var bodyParser=require('body-parser');

const server = http.createServer(app); 

app.use(cors());
// app.use(bodyParser.json());
app.use(express.json());

const io = new Server(server, {
    cors: {
      // origin: "http://localhost:4200", // Angular default port
      methods: ["GET", "POST"]
    },
    maxHttpBufferSize: 1e7 // 10MB – Increase if you need more
  });
io.on("connection",(socket)=>{
    try{
        console.log("io connected",socket.id);
         // Receive message from one client
        socket.on("sendMessage", (msg) => {
          console.log("Received message from client:", msg);

          // Broadcast to all clients except sender
          socket.broadcast.emit("receiveMessage", msg);
        });
        // for typing--------------
        socket.on('typing', (data) => {
          socket.broadcast.emit('typing', data);
        });
        socket.on('stoptyping', (data) => {
          socket.broadcast.emit('stoptyping');
        });


    }
    catch(err)
    {
        console.log("err in io",err);
    }
});

app.use("/",route);

server.listen(8080, () => {
    console.log("Server is running on port 8080");
  });