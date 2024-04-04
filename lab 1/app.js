const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET") {
    const [_, operation, ...numbers] = url.split("/");

    let result;
    switch (operation) {
      case "add":
        result = numbers.reduce((prev, next) => prev + Number(next), 0);
        break;
      case "sub":
        result = numbers.reduce((prev, next) => prev - Number(next));
        break;
      case "mul":
        result = numbers.reduce((prev, next) => prev * Number(next), 1);
        break;
      case "div":
        result = numbers.reduce((prev, next) => {
          if (Number(next) === 0) {
            throw new Error("Division by zero is not allowed");
          }
          return prev / Number(next);
        });
        break;
      default:
        res.statusCode = 404;
        res.end("Invalid operation");
        return;
    }
    
    fs.appendFile("results.txt", `${result}\n`, (err) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end("Internal Server Error");
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(`<h1>${result.toString()}</h1>`);
        res.end();
      }
    });
  } else {
    res.statusCode = 405;
    res.end("Method Not Allowed");
  }
});

server.listen(3000, () =>
  console.log(`Server running on <http://localhost:3000>`)
);
