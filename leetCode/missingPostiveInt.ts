function firstMissingPositive(nums: number[]): number {
  // let a = nums.filter(x => x > 0);
  // if (a.length == 0) return 1;
  // a.sort((x, y) => x - y);
  // let se = new Set(a); // sorted array in set is a treeset actually in java
  // let n = se.size;
  // let i = 1;
  // for (const e of se) { // searching hashset with index i start with 1
  //     if (i != e) return i; // if e not the same as expected positive num i, means i miss
  //     if (i == n) return e + 1; // after complete searching hashset, no missing, so the first missing is the last num + 1
  //     i++;
  // }


//second
  // let m = new Map();
  // for (let i = 0; i < nums.length; i++) {
  //     m.set(nums[i], 1);
  // }
  // for (let i = 1; i <= nums.length; i++) {
  //     if (!m.has(i)) return i;
  // }
  // return nums.length + 1; // the array is [1,2,...,n]
  // Time Complexity: O(n)
  // Space Complexity: O(n)
  /*
  The worst case (the first missing positive being the greatest) is
  when the array is [1,2..,n]. Therefore, in all other cases except this case,
  the first missing positive number is less than or equal to n (nums.length).
  */


      for (let i = 0; i < nums.length; i++) {
      let idx = nums[i]-1;
      if (i == idx || nums[i] == nums[idx]) continue; // already positioned or nums[i] is a duplicate
      if (idx >= 0 && idx <= nums.length - 1) {
          [nums[i], nums[idx]] = [nums[idx], nums[i]];
          i--; // check the swapped number
      }
  }

  for (let i = 0; i < nums.length; i++) {
      if (i+1 == nums[i]) continue;
      else return i+1; // the next positive number which is i+1 doesn't exist in the array
  }

  return nums.length + 1; // the array is [1,2,...,n]
  // Time Complexity: O(n)
  // Space Complexity: O(1)

};


