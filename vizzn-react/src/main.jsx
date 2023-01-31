import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { SocketContext, SocketProvider } from "./context/SocketContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SocketProvider>
    <App />
  </SocketProvider>
);
