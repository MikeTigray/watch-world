const mongoose = require("mongoose");
const db = require("../config/connection");
const { Watch, User } = require("../models");

const watchData = [
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
const userData = [
  {
    fullName: "Mike Abay",
    email: "miketesfay23@gmail.com",
    password: "adminadmin",
  },
  {
    fullName: "Eyuel Muler",
    email: "eyumuler23@gmail.com",
    password: "tigraytigray",
  },
];
db.once("open", async () => {
  await Watch.deleteMany({});
  await User.deleteMany({});

  const watches = await Watch.insertMany(watchData);
  const users = await User.insertMany(userData);

  console.log("Data was successfully seeded! 👍🏽");

  process.exit();
});
