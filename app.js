const express = require("express");
const app = express();
const ExpressError = require("./expressError");
const { mean, mode, median } = require("./functions");

app.get("/mean", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError(
      "Must pass query of numbers seprated by commas",
      400
    );
  }
  let numsArray = [];
  let splitNums = req.query.nums.split(",");
  for (i = 0; i < splitNums.length; i++) {
    let num = Number(splitNums[i]);
    if (Number.isNaN(num)) {
      throw new Error(`${splitNums[i]} is not a valid number.`);
    } else numsArray.push(num);
  }
  let result = {
    operation: "mean",
    result: mean(numsArray),
  };
  return res.send(result);
});

app.get("/median", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError(
      "Must pass query of numbers seprated by commas",
      400
    );
  }
  let numsArray = [];
  let splitNums = req.query.nums.split(",");
  for (i = 0; i < splitNums.length; i++) {
    let num = Number(splitNums[i]);
    if (Number.isNaN(num)) {
      throw new Error(`${splitNums[i]} is not a valid number.`);
    } else numsArray.push(num);
  }
  let result = {
    operation: "median",
    result: median(numsArray),
  };
  return res.send(result);
});

app.get("/mode", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError(
      "Must pass query of numbers seprated by commas",
      400
    );
  }
  let numsArray = [];
  let splitNums = req.query.nums.split(",");
  for (i = 0; i < splitNums.length; i++) {
    let num = Number(splitNums[i]);
    if (Number.isNaN(num)) {
      throw new Error(`${splitNums[i]} is not a valid number.`);
    } else numsArray.push(num);
  }
  let result = {
    operation: "mode",
    result: mode(numsArray),
  };
  return res.send(result);
});

app.use(function (req, res, next) {
  const err = new ExpressError("Not Found", 404);

  // pass the error to the next piece of middleware
  return next(err);
});

/** general error handler */

app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message,
  });
});

app.listen(3000, function () {
  console.log(`Server starting on port 3000`);
});
