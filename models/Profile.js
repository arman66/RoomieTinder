const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  // create a ref to the user already created

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  sex: {
    type: String,
  },
  bio: {
    type: String,
  },
  age: {
    type: Number,
  },
  job: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
