const { Schema, model } = require("mongoose");

const watchSchema = new Schema({
  name: { type: String, required: true, unique: true },
});
