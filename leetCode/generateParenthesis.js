

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.



// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]


// Constraints:

// 1 <= n <= 8


// /**
//  * @param {number} n
//  * @return {string[]}
//  */
 var generateParenthesis = function(n) {
  let listParen = [];
  let options = ['(', ')']

  let parenthesis = (stringer,left,right)=> {

      if (left<right||left>n) {
          return;
      }


      if (stringer.length/2===n) {
          listParen.push(stringer);
          return;
      } else {
          let test1 = stringer+'('
          parenthesis(test1, left+1, right)
          let test2 = stringer+')'
          parenthesis(test2, left, right+1)

      }


  }

  parenthesis('', 0, 0)

  return listParen;

};