/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {

  let something =nums.indexOf(target);
  let finalArray = [something]
  let done = false;

  if (something===-1) {
      return [-1,-1]
  }

  while (done === false) {

      if (nums[something+1] === target) {
          something++;
      } else {
          finalArray.push(something)
          done=true;
      }

  }


  return finalArray;



};