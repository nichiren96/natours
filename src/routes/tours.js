const express = require("express");
const toursController = require("../controllers/tours");
const authController = require("../controllers/auth");
const reviewRouter = require("../routes/reviews");

const router = express.Router();

router.use("/:tourId/reviews", reviewRouter);

router
  .route("/top-5-cheap")
  .get(toursController.aliasTopTours, toursController.getAllTours);

router.route("/tour-stats").get(toursController.getTourStats);
router.route("/monthly-plan/:year").get(toursController.getMonthlyPlan);

router
  .route("/")
  .get(toursController.getAllTours)
  .post(toursController.createTour);

router
  .route("/:tourId")
  .get(toursController.getTour)
  .patch(toursController.updateTour)
  .delete(
    authController.checkAuth,
    authController.restrictTo("admin", "lead-guide"),
    toursController.deleteTour
  );

module.exports = router;
