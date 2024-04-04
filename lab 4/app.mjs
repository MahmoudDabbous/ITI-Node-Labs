import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import ejs from "ejs";

const app = express();
const server = createServer(app);
const io = new Server(server);

app.engine("html", ejs.renderFile);
app.set("view engine", ejs);

app.get("/", (req, res) => {
  res.render("index.html");
});

io.on("connection", (socket) => {
  socket.on("message", (msg) => {
    io.emit("message", msg);
  });
});

server.listen(3000, () => {
  console.log("server running at <http://localhost:3000>");
});
