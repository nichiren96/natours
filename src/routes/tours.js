const express = require("express");
const toursController = require("../controllers/tours");
const authController = require("../controllers/auth");

const router = express.Router();

router
  .route("/top-5-cheap")
  .get(toursController.aliasTopTours, toursController.getAllTours);

router.route("/tour-stats").get(toursController.getTourStats);
router.route("/monthly-plan/:year").get(toursController.getMonthlyPlan);

router
  .route("/")
  .get(authController.checkAuth, toursController.getAllTours)
  .post(toursController.createTour);

router
  .route("/:tourId")
  .get(toursController.getTour)
  .patch(toursController.updateTour)
  .delete(toursController.deleteTour);

module.exports = router;
