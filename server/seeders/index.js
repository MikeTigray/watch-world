const mongoose = require("mongoose");
const db = require("../config/connection");
const { Watch } = require("../models");

const data = [
  {
    name: "Forrester Chronograph",
    price: 150.0,
    brand: "FOSSIL",
    image: "",
  },
  {
    name: "Limited Edition Harry Potter™",
    price: 200.0,
    brand: "FOSSIL",
    image: "",
  },
  {
    name: "Gen 6 Wellness",
    price: 299.0,
    brand: "FOSSIL",
    image: "",
  },
];

db.once("open", async () => {
  await Watch.deleteMany({});

  const watches = await Watch.insertMany(data);

  console.log(watches, "Watches were successfully seeded! 👍🏽");

  process.exit();
});

module.exports = data;
