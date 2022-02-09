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

router.route("/:id").delete(reviewController.deleteReview);

module.exports = router;
