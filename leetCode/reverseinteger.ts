// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0


// Constraints:

// -231 <= x <= 231 - 1




function reverse(x: number): number {
  let negative = 1;
  let max = Math.pow(2, 31)
  if (x<0) {
      negative = -1;
      x = Math.abs(x);


  }


  let stringify = x+'';
  // let returnstring = '';
//     for (let letters = stringify.length-1; letters>-1; letters--) {
//         returnstring+= stringify[letters];

//             return str.split("").reverse().join("");


//     }

  let returnstring = stringify.split('').reverse().join('');
  // console.log(returnstring)

  let final = +returnstring*negative;

  if (+returnstring>max) {
      return 0;
  }

  return (final);
};