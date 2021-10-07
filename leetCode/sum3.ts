function threeSum(nums: number[]): number[][] {

  if (nums.length < 3) {
    return [];
  }

  //this will be for tomorrow
  nums = nums.sort((a, b) => a - b)

  let firstNum = nums[0];
  let studiedArray = [];
  let finalArray = [];
  let stringArray = [];
  let pushableArray = [];
  let stringer = '';

  for (let i = 0; i < nums.length; i++) {
    let firstNum = nums[i];

    if (studiedArray[studiedArray.length - 1] === nums[i]) {
      continue;
    }
    studiedArray.push(firstNum);


    let k = nums[i + 1]

    let j = nums[nums.length - 1];

    let checker = false;
    while (checker === false) {
      if (firstNum + k + j === 0) {
        pushableArray = [nums[i], nums[k], nums[j]]
      };
      stringer = pushableArray.join('');
      if (!stringArray.includes(stringer)) {
        stringArray.push(stringer);
        finalArray.push([nums[i], nums[j], nums[k]])

        if (j > 0 || k < 0 || k < j) {
          checker = true
        }


        continue;

      }
      if (j > 0 || k < 0 || k < j) {
        checker = true
      }




    }
  }






  return finalArray
};


//this is the better version that considerably reduces time to handle things

function threeSum(nums: number[]): number[][] {

  if (nums.length < 3) {
    return [];
  }

  //this will be for tomorrow
  nums = nums.sort((a, b) => a - b)
let checker = false;
  let studiedArray = [];
  let finalArray = [];
  let stringArray = [];
  let pushableArray = [];
  let stringer = '';

  for (let i = 0; i < nums.length-2; i++) {
    let firstNum = nums[i];

    if (studiedArray[studiedArray.length - 1] === nums[i]) {
      continue;
    }
    studiedArray.push(firstNum);

    let k = i + 1

    let j = nums.length - 1;


    checker = false;

    while (checker === false) {

        if (nums[j]===1) {
            // console.log(firstNum, nums[k], nums[j], 'a trigger')
        }





      if (firstNum + nums[k] + nums[j] === 0 && k!==j) {

        pushableArray = [nums[i], nums[k], nums[j]]
                stringer = pushableArray.join('');
      if (!stringArray.includes(stringer)) {
        stringArray.push(stringer);
        finalArray.push([nums[i], nums[j], nums[k]])

      }
                   j = nums.length-1;
                k++;

      };

    if (k >= j) {


        checker = true
      }




        if ((firstNum + nums[k] + nums[j])<0) {
            k++
        }

        if ((firstNum + nums[k] + nums[j])>0) {

            j--;
        }




    }
  }






  return finalArray
};

//bestest

function threeSum(nums: number[], targetSum: number = 0): number[][] {
  if (nums.length < 3) return [];

  nums = nums.sort((a, b) => a - b);
  const triplets: number[][] = [];
  for (let anchorIndex = 0; anchorIndex < nums.length - 2; anchorIndex++) {
    // Remove any duplicates from anchor position before setting up pointers.
    while (nums[anchorIndex] === nums[anchorIndex - 1]) anchorIndex++;
    let leftPointer: number = anchorIndex + 1;
    let rightPointer: number = nums.length - 1;
    while (leftPointer < rightPointer) {
      const [anchorValue, leftValue, rightValue]: number[] = [
        nums[anchorIndex],
        nums[leftPointer],
        nums[rightPointer],
      ];
      const sum: number = anchorValue + leftValue + rightValue;
      if (sum === targetSum) {
        triplets.push([anchorValue, leftValue, rightValue]);
        // Remove any duplicates after finding the target sum.
        while (nums[leftPointer] === nums[leftPointer + 1]) leftPointer++;
        // Traverse one past current Non duplicate value.
        leftPointer++;
      }
      if (sum > targetSum) rightPointer--;
      if (sum < targetSum) leftPointer++;
    }
  }
  return triplets;
};
