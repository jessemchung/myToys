function twoSum(nums: number[], target: number): number[] {

  //     for (let i = 0; i<nums.length; i++) {

  //         let complement = target-nums[i];

  //         let indexy = nums.lastIndexOf(complement)
  //         if(indexy>i) {
  //             return [i, indexy]
  //         }
  //     }


      if (nums.length === 2) return [0, 1];
      //make sure to just return if array length is 2
      const len = nums.length;
      //length
      let map = {};
      //create object
      for(let i = 0; i < len; i++) {
          let n = target - nums[i];
          //the current complement
          let find = map[n];
          //returns whatever this value was
          if(find !== undefined) return [find, i];
          //if it is defined, that means it was entered before so the number will be returned
          else map[nums[i]] = i;

          //if it is undefined, that means this number was never entered before, and thus the number will be archived for the numbers after it to know and to see if it is a complement and to also immediately be able to grab it's index value.  THis also allows two of the same number to be used efficiently
      }
