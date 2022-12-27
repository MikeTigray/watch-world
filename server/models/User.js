const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "A user must have a name"],
    unique: [true, "A user must have a unique name"],
  },
  email: {
    type: String,
    required: [true, "A user must provide an email"],
    match: [
      /([a-zA-Z0-9-_\.]+)(@\w+\.)(\w{2,6})/,
      "A user must provide a valid email address.",
    ],
    unique: [true, "A user must have a unique email"],
  },
  password: { type: String, required: true },
  wishlist: [{ type: Schema.Types.ObjectId, ref: "Watch" }],
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
