const express = require("express");
const viewController = require("../controllers/views");
const router = express.Router();
const authController = require("../controllers/auth");

router.use(authController.isLoggedIn);

router.get("/", viewController.getOverview);

router.get("/tour/:slug", viewController.getTour);

router.get("/login", viewController.getLoginForm);

module.exports = router;
