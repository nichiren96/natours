const User = require("../models/user");
const catchAsync = require("../utils/catchAsync");

exports.getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find();

  // SEND RESPONSE
  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users,
    },
  });
});

exports.getUser = (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "Not yet implemented",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createUser = (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "Not yet implemented",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateUser = (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "Not yet implemented",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteUser = (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "Not yet implemented",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
