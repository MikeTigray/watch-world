const { Schema, model } = require("mongoose");

const watchSchema = new Schema({
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
});

const Watch = model("Watch", watchSchema);

module.exports = Watch;
