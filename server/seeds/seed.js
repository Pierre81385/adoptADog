const db = require("../config/connection");
const { Dog } = require("../models");

const dogData = require("./dogSeeds.json");

db.once("open", async () => {
  await Dog.deleteMany({});

  const dogs = await Dog.insertMany(dogData);

  console.log("dogs seeded!");
  process.exit(0);
});
