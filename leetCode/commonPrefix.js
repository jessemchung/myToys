/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  if (strs[0].length===0) {
  return '';
}

if (strs.length===1) {
  return strs[0];
}

let finalString = '';
let done = false;
let numberCheck = 0;
while (done===false) {


  let letterCheck = strs[0][numberCheck];

  if (letterCheck===undefined) {
      break;
  }

  for (let i = 1; i<strs.length; i++) {
      if (strs[i][numberCheck]===letterCheck) {
          continue;
      } else {
          done = true;
      }


  }
  if (done === true) {
      break;
  } else {
      finalString +=letterCheck;
      numberCheck++;
  }


}

return finalString;
};