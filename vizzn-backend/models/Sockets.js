const RequestList = require("./RequestList");

class Sockets {
  constructor(io) {
    this.io = io;
    this.requests = new RequestList();
    this.socketEvents();
  }

  socketEvents() {
    //work here
    this.io.on("connection", (socket) => {
      console.log("Client Connected");

      socket.emit("request-list", this.requests.requests);

      socket.on("create-request", (payload) => {
        this.requests.addRequest(payload);
        this.io.emit("request-list", this.requests.requests);
      });
      socket.on("delete-request", (id) => {
        this.requests.deleteRequest(id);
        this.io.emit("request-list", this.requests.requests);
      });
    });
  }
}

module.exports = Sockets;
