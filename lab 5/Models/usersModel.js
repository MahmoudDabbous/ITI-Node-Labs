const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

var DB_URL = "mongodb://localhost:27017/NodeLabs";

mongoose.connect(DB_URL, { useNewUrlParser: true });

let usersSchema = new mongoose.Schema({
  name: {
    type: String,
    pattern: "^[a-zA-Z]+$",
    required: true,
  },
  age: {
    type: Number,
    min: 18,
  },
  address: {
    street: String,
    city: String,
    zipcode: String,
  },
  email: {
    type: String,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: {
    type: String,
    required: true,
  },
});

usersSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
  } catch (error) {
    return next(error);
  }
});

module.exports = mongoose.model("User", usersSchema);
