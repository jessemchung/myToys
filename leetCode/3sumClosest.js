// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */

// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.




 var threeSumClosest = function(nums, target) {
  nums = nums.sort((a, b)=> {
      return a-b

  })
  let sum = nums[0]+nums[1]+nums[2];
  let current;
  let lowest;
  let highest;

  for (let i= 0; i<nums.length; i++) {
      current = i;
      lowest = current+1;
      highest = nums.length-1;
      for (let j = lowest; j<nums.length; j++ ) {
          if (highest<=lowest) {
              break;
          }
          let currentSum = nums[current] +nums[lowest] +nums[highest]
          let targetSumDifference = Math.abs((target)-(sum));

          if ( Math.abs(currentSum-(target)) < (targetSumDifference) ) {
              sum = currentSum;
              if (sum===target) {
                  return sum;
              }
          }

          if (currentSum < target) {
              lowest++;
          } else if (currentSum> target) {
              highest--;
          }
      }
  }
  return sum;
};