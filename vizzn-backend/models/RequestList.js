const Request = require("./Request");

class RequestList {
  constructor() {
    this.requests = [
      new Request({
        username: "ginner",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      }),
      new Request({
        username: "ginner",
        title:
          " Aenean pharetra fermentum nulla ut rutrum. Nunc quis rhoncus nulla. Maecenas vitae lorem dui. Suspendisse condimentum, ",
      }),
    ];
  }

  addRequest(payload) {
    const newRequest = new Request(payload);
    this.requests.push(newRequest);
    return this.requests;
  }

  deleteRequest(id) {
    this.requests = this.requests.filter((request) => request.id !== id);
  }

  handleStatus(id) {
    this.requests = this.requests.map((request) => {
      if (request.id === id) request.done = !request.done;
      return request;
    });
  }
}

module.exports = RequestList;
