const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer((req, res) => {
    const filename = "." + url.parse(req.url, true).pathname;

    if (filename === "./welcome.html" && req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const params = new URLSearchParams(body);
        const jsonBody = JSON.stringify(Object.fromEntries(params), null);

        fs.readFile("clients.json", (err, data) => {
          let clients = [];
          if (!err) {
            clients = JSON.parse(data);
          }

          clients.push(jsonBody);

          fs.writeFile("clients.json", JSON.stringify(clients), (err) => {
            if (err) {
              console.log(err);
            }
          });
        });
      });
    }

    fs.readFile(filename, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404 Not Found");
        return;
      }
      if (filename === "./clients.json") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(data);
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  })
  .listen(8080);
