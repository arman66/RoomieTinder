const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const checkObjectId = require("../../middleware/checkObjectId");
const Listing = require("../../models/Listing");
const User = require("../../models/Users");

// @route    POST api/listings
// @desc     Create a post
// @access   Private

router.post("/", [auth], async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    const newListing = new Listing({
      description: req.body.description,
      listingname: req.body.listingname,
      location: req.user.location,
      username: user.name,
      user: req.user.id,
    });

    const listing = await newListing.save();

    res.json(listing);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/listing
// @desc     Get all listings
// @access   Public
router.get("/", async (req, res) => {
  try {
    const listings = await Listing.find().sort({ date: -1 });
    res.json(listings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/listing/:id
// @desc     Get post by ID
// @access   Public
router.get("/:id", [checkObjectId("id")], async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);

    res.json(listing);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/listing/:id
// @desc     Delete a listing
// @access   Private
router.delete("/:id", [auth, checkObjectId("id")], async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);

    // Check user
    if (listing.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await listing.remove();

    res.json({ msg: "Listing removed" });
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

// @route    POST api/listing/review/:id
// @desc     REview on a listing
// @access   Private
router.post("/review/:id", [auth, checkObjectId("id")], async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    const listing = await Listing.findById(req.params.id);

    const newReview = {
      text: req.body.text,
      name: user.name,
      rating: req.body.rating,
      user: req.user.id,
      date: req.body.date,
    };

    listing.review.unshift(newReview);

    await listing.save();

    res.json(listing.review);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/listing/review/:id/:review_id
// @desc     Delete review
// @access   Private
router.delete("/review/:id/:review_id", auth, async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);

    // Pull out review
    const reviews = listing.review.find(
      (review) => review.id === req.params.review_id
    );
    // Make sure review exists
    if (!reviews) {
      return res.status(404).json({ msg: "Review does not exist" });
    }
    // Check user
    if (reviews.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    listing.review = listing.review.filter(
      ({ id }) => id !== req.params.review_id
    );

    await listing.save();

    return res.json(listing.review);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
