const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/watch-world", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Mongo database!");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose.connection;
