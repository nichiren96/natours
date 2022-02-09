const express = require("express");
const reviewController = require("../controllers/reviews");
const authController = require("../controllers/auth");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(reviewController.getAllReviews)
  .post(
    authController.checkAuth,
    authController.restrictTo("user"),
    reviewController.createReview
  );

module.exports = router;
