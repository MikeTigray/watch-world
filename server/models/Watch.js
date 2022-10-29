const { Schema, model } = require("mongoose");

const watchSchema = new Schema({
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  image: { type: String },
});

const Watch = model("Watch", watchSchema);

module.exports = Watch;
