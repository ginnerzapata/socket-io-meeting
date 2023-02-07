const RequestList = require("./RequestList");

class Sockets {
  constructor(io) {
    this.io = io;
    this.requests = new RequestList();
    this.socketEvents();
  }

  socketEvents() {
    //work here
  }
}

module.exports = Sockets;
