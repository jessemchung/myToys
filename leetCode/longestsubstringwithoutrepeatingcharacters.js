/**
 * @param {string} s
 * @return {number}
 */

//https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Given a string s, find the length of the longest substring without repeating characters.



// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


 var lengthOfLongestSubstring = function(s) {
  let arrayOfAll = [];
  let currentLongestString ='';
  let currentStringLength = 0
  for (let i=0; i<s.length; i++) {
      if (arrayOfAll.includes(s[i])) {
          console.log('new string time')
          arrayOfAll = [];

          //this needs to check and the add all previous letters
          for (let j=1; j<s.length; j++) {
              if (s[i-j]===s[i]) {
                  break
              } else {
                  arrayOfAll.push(s[i-j]);
              }
          }
          arrayOfAll.push(s[i]);

      }

      else if (!arrayOfAll.includes(s[i])) {
          //needs to check if the current letter is longer
          console.log('add new letter');
          arrayOfAll.push(s[i]);
          if (currentStringLength<arrayOfAll.length) {
              console.log('hi');
              currentStringLength=arrayOfAll.length;
              console.log(currentStringLength);
          }
      }


      //if it includes, it must mean we start checking new words

      //therefore arrayOfAll must be cleared out

      //then we add the new value into the array


  }

  console.log(currentStringLength)
  return currentStringLength
};