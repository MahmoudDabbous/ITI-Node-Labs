const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = 8000;

const logging = require("./Middleware/logging");
const itemsRouter = require("./Routes/itemsRoutes");
const ordersRouter = require("./Routes/ordersRoutes");
const usersRouter = require("./Routes/usersRoutes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", logging);
app.use("/api/items", itemsRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server is running at <http://localhost:${PORT}>`);
});
