const { Schema, model } = require("mongoose");

const dogSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  size: {
    type: String,
  },
  gender: {
    type: Boolean,
  },
});

const Dog = model("Dog", dogSchema);

module.exports = Dog;
