const Tour = require("../models/tour");
const catchAsync = require("../utils/catchAsync");

exports.getOverview = catchAsync(async (req, res) => {
  // 1) Get tour data from collection
  const tours = await Tour.find();
  res.status(200).render("overview", { title: "All tours", tours });
});

exports.getTour = catchAsync(async (req, res) => {
  // 1) Get the data
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: "reviews",
    fields: "review rating user",
  });

  res.status(200).render("tour", { title: `${tour.name} Tour`, tour });
});
