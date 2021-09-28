// Given a string s, return the longest palindromic substring in s.



// Example 1:

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
// Example 3:

// Input: s = "a"
// Output: "a"
// Example 4:

// Input: s = "ac"
// Output: "a"


// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.


/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {

  let longestPalindrome = s[0];

  //likely needs to go through the string

  //check string if there is another same letter after this one.

  //then it needs to check in between

  //value to store max length.

  //we can check s.length and if 1 or more, automatically set longest palindrome to equal the first letter

  //then each letter we check if there is at least one other letter

  //if so, we start checking

  //indexOf(searchValue, fromIndex)

  //returns -1 if not found so if -1 continue

  //if not, we can start checking each palindrome

  for (let currentStringIndex=0; currentStringIndex<s.length; currentStringIndex++) {
      if (s.indexOf(s[currentStringIndex], (currentStringIndex+1))>0) {
          // console.log('palindrome possible')

          let indexAll = [];

          for (let letterChecker=currentStringIndex; letterChecker<s.length; letterChecker++) {
              if (s[letterChecker] === s[currentStringIndex]) {
                  // console.log('same letter')
                  indexAll.push(letterChecker)

              }
          }

          for (let palindromeIndex=1; palindromeIndex<indexAll.length; palindromeIndex++) {
              let isPalindrome = true;
              for (let indexer=0; indexer<(indexAll[palindromeIndex]-indexAll[0])/2; indexer++) {
                  if(s[(indexAll[0]+indexer)]===s[(indexAll[palindromeIndex]-indexer)]) {
                      // console.log('could be a palindrome')
                  } else {
                      // console.log('error')
                      isPalindrome = false;
                  }

              }
              // console.log('what the ', indexAll[palindromeIndex])
              if (isPalindrome===true && longestPalindrome.length<(indexAll[palindromeIndex]+1-indexAll[0])) {
                  longestPalindrome = s.slice(indexAll[0], indexAll[palindromeIndex]+1)
              }
          }

          // console.log(indexAll)
      }

  }

  return longestPalindrome

};

//below is a better version

function betterlongestPalindrome(s) {
  // ll: Left index of the longest palindrome.
  // rr: Right index of the longest palindrome.
  let ll = 0, rr = 0;

  // Iterate all palindromes with center indices
  // [..., i, ...] or [... i, i+1, ...]
  for (let i = 0; i < s.length; i++) {
      console.log(i, 'i')
    for (let j of [i, i+1]) {
        console.log(j, 'j')
      for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++)
        // Found a new palindrome [l, ..., i, j, ..., r]
        // Update the ll, rr if the newly found palindrome is longer than the
        // existing one.
        [ll, rr] = (r-l+1) > (rr-ll+1) ? [l, r] : [ll, rr];
                console.log('hi')

    }
  }
  return s.substring(ll, rr+1);
}
