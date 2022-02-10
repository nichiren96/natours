const express = require("express");
const userController = require("../controllers/users");
const authController = require("../controllers/auth");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.post("/forgot-password", authController.forgotPassword);
router.patch("/reset-password/:token", authController.resetPassword);

router.patch(
  "/update-my-password",
  authController.checkAuth,
  authController.updatePassword
);

router.get(
  "/me",
  authController.checkAuth,
  userController.getMe,
  userController.getUser
);
router.patch("/update-me", authController.checkAuth, userController.updateMe);
router.delete("/delete-me", authController.checkAuth, userController.deleteMe);

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
