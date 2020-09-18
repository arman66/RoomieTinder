const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },

  listingName: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
  location: {
    type: String,
  },
  furnished: {
    type: String,
  },
  review: [
    {
      user: {
        type: Schema.Types.ObjectId,
      },
      text: {
        type: String,
        required: true,
      },
      name: {
        type: String,
      },
      rating: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("listing", ListingSchema);
