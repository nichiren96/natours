const Tour = require("../models/tour");
const catchAsync = require("../utils/catchAsync");

exports.getOverview = catchAsync(async (req, res) => {
  // 1) Get tour data from collection
  const tours = await Tour.find();
  res.status(200).render("overview", { title: "All tours", tours });
});

exports.getTour = (req, res) => {
  res.status(200).render("tour", { title: "Baobab Tours" });
};
