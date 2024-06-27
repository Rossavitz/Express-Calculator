function mean(nums) {
  if (nums.length === 0) return 0;
  let sum = 0;

  // loop through array adding nums, divid by length to get avg
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  const mean = sum / nums.length;
  console.log(mean);
  return mean;
}

function median(nums) {
  if (nums.length === 0) return 0;
  //sort in ascending order
  nums.sort((a, b) => a - b);
  //find middle index, floor to integer
  let middleIndex = Math.floor(nums.length / 2);
  let median;
  //handle case if nums length is even (aka, not a perfect middle index)
  if (nums.length % 2 === 0) {
    median = (nums[middleIndex - 1] + nums[middleIndex]) / 2;
  } else {
    median = nums[middleIndex];
  }
  console.log(median);
  return median;
}

function mode(nums) {
  if (nums.length === 0) return 0;
  //sort in ascending order
  nums.sort((a, b) => a - b);

  let modes = [];
  let maxCount = 0;
  let currentCount = 1;

  let i = 0;
  while (i < nums.length) {
    //count occurrences of the current num
    while (i < nums.length - 1 && nums[i] === nums[i + 1]) {
      currentCount++;
      i++;
    }
    // update the modes array
    if (currentCount === maxCount) {
      modes.push(nums[i]);
    } else if (currentCount > maxCount) {
      maxCount = currentCount;
      modes = [nums[i]];
    }
    // reset the count for the next element
    currentCount = 1;
    i++;
  }
  console.log(modes);
  return modes;
}

module.exports = {
  mean,
  mode,
  median,
};
