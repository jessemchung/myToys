/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
  let last = digits.length-1;

  digits[last]++;

  let done = false;

  while (done===false)  {


      if (digits[last] !==10) {
          done=true;
      } else if (digits[last] === 10) {
          digits[last] = 0;
          last--;

          if (last===-1) {
              digits.unshift(1);
          } else {
              digits[last]++;
          }


      }
  }
  return digits;
};