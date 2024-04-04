const express = require("express");
const fs = require("fs");
const { json, urlencoded } = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8080;

app.use(urlencoded({ extended: true }));
app.use(json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/main.html");
});

app.get("/main.html", (req, res) => {
  res.sendFile(__dirname + "/main.html");
});

app.get("/welcome.html", (req, res) => {
  res.sendFile(__dirname + "/welcome.html");
});

app.use(bodyParser.json());

app.post("/welcome.html", (req, res) => {
  const params = req.body;
  const jsonBody = JSON.stringify(params);

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

  res.redirect("/welcome.html");
});

app.get("/clients.json", (req, res) => {
  fs.readFile("clients.json", (err, data) => {
    if (err) {
      res.status(404).send("404 Not Found");
      return;
    }

    res.setHeader("Content-Type", "application/json");
    res.send(data);
  });
});

app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Server is running at <http://localhost:${port}>`);
});
