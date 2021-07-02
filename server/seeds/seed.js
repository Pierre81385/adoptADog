const db = require("../config/connection");
const { Dog, User } = require("../models");

const dogData = require("./dogSeeds.json");
const userData = require("./userSeeds.json");

db.once("open", async () => {
  if (Dog) {
    await db.collection("Dog").deleteMany;
  }

  if (User) {
    await db.collection("User").deleteMany;
  }

  const dogs = await db.collection("Dog").insertMany(dogData);
  const users = await db.collection("User").insertMany(userData);

  console.log("dogs and users seeded!");
  process.exit(0);
});
