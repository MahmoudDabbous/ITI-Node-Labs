const mongoose = require("mongoose");

const DB_URL = "mongodb://localhost:27017/NodeLabs";

mongoose.connect(DB_URL, { useNewUrlParser: true });

let itemsSchema = new mongoose.Schema({
  itemName: {
    type: String,
    pattern: "^[a-zA-Z]+$",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    default: "No Description",
  },
});

module.exports = mongoose.model("items", itemsSchema);
