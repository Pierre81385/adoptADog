const db = require("../config/connection");
const { Dog } = require("../models");

const dogSeeds = require("./dogSeeds.json");

db.once("open", async () => {
  if (Dog) {
    await db.collection("Dog").deleteMany;
  }
  const dogs = await db.collection("Dog").insertMany(dogSeeds);

  console.log("Dogs seeded!");
  process.exit(0);
});
