const mongoose = require("mongoose");

var DB_URL = "mongodb://localhost:27017/NodeLabs";

mongoose.connect(DB_URL, { useNewUrlParser: true });

let ordersSchema = new mongoose.Schema({
  totalPrice: {
    type: Number,
    required: true,
    min: 0,
  },
  items: [
    {
      itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "items",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
    },
  ],
});

module.exports = mongoose.model("Order", ordersSchema);
