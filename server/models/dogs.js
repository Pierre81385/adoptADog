//models describing dog object in DB

const { Schema, model } = require("mongoose");

const dogSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  breed: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Integer,
    require: true,
    trim: true,
  },
  size: {
    type: Float,
    require: true,
    trim: true,
  },
  gender: {
    type: Boolean,
    require: true,
  },
});

const Dog = model("dog", dogSchema);

module.exports = Dog;
