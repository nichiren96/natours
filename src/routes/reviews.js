const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviews");
const authController = require("../controllers/auth");

router
  .route("/")
  .get(reviewController.getAllReviews)
  .post(
    authController.checkAuth,
    authController.restrictTo("user"),
    reviewController.createReview
  );

module.exports = router;
