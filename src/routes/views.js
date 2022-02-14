const express = require("express");
const viewController = require("../controllers/views");
const router = express.Router();

router.get("/", viewController.getOverview);

router.get("/tour/:slug", viewController.getTour);

module.exports = router;
