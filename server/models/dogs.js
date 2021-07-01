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
    type: String,
    require: true,
    trim: true,
  },
  size: {
    type: String,
    require: true,
    trim: true,
  },
  gender: {
    type: Boolean,
    require: true,
  },
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Dog = model("dog", dogSchema);

module.exports = Dog;
