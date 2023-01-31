const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const cors = require("cors");

const Sockets = require("./Sockets");

class Server {
  constructor() {
    this.app = express();
    this.port = "8888";
    this.server = http.createServer(this.app);
    this.io = socketio(this.server, {
      /*your configs*/
    });
  }

  middlewares() {
    this.app.use(express.static(path.resolve(__dirname, "../public")));
    this.app.use(cors());
  }

  configSockets() {
    new Sockets(this.io);
  }

  execute() {
    this.middlewares();
    this.configSockets();
    this.server.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

module.exports = Server;
