const { Schema, model } = require("mongoose");
// const watchSchema = require("./Watch");

const userSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "A user must have a name"],
    unique: true,
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
const User = model("User", userSchema);

module.exports = User;
