const { v4: uuidv4 } = require("uuid");

class Request {
  constructor(payload) {
    this.id = uuidv4();
    this.title = payload.title;
    this.createdBy = payload.username;
    this.createdAt = new Date();
    this.done = false;
  }
}

module.exports = Request;
