const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  // create a ref to the user already created

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  location: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  sex: {
    type: String,
  },
  age: {
    type: String,
  },
  bio: {
    type: String,
  },
  job: {
    type: String,
  },
  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
