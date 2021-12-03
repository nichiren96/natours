const express = require("express");
const usersController = require("../controllers/users");

const router = express.Router();

router
  .route("/")
  .get(usersController.getAllUsers)
  .post(usersController.createUser);

router
  .route("/:userId")
  .get(usersController.getUser)
  .patch(usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = router;
