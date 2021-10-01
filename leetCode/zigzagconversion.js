// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);


// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"


// Constraints:

// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000
// Accepted
// 642,688
// Submissions
// 1,615,587




// /**
//  * @param {string} s
//  * @param {number} numRows
//  * @return {string}
//  */
 var convert = function(s, numRows) {
  if (numRows === 1) {
      return s;
  }


  let counter = 0;
  let zigging = true;

  let zigWhere = numRows-2;
  let possibleZigWhereReset = numRows-2;

  if (zigWhere<0) {
      zigWhere = 1;
      possibleZigWhereReset=1
  }

  // console.log(numRows, 'what is numRows')
  //convert into matrix is the most important thing
  let tempArray = (Array(numRows).fill("",0));
//     console.log(Array(5).fill("girl",0));

//     console.log(Array(5).fill("",0));
  //first create arrays as long as there are letters. Then each array is filled
  //if event, add all letters
  //if odd, determine which spot to fill
  //concact everything
  //maybe create matrix actually

  //create matrix for use starting with an empty array

  let zigMatrix= [];
  //create a counter to determine if a colum is filled.  Have that counter be reset when you go a new thing

  if (numRows === 2) {
      let odd = ''
      let even = ''
      for (let i=0; i<s.length;i++) {
          if (i%2===0) {
              even+=s[i]
          } else {
              odd+=s[i]
          }


      }
      return (even+odd);

  }

  for (let i=0; i<s.length;i++) {


      if (counter !== numRows && i!==s.length-1) {
          zigging = false;
          tempArray[counter] = s[i];
          counter++;
          // console.log(counter, 'what is counter');
      } else if (i===s.length-1) {

          if (zigging) {
              console.log('problem');
                  tempArray[zigWhere] = s[i];
                  zigMatrix.push(tempArray);

              }

          else if (counter ===  numRows) {
              console.log(counter, numRows, (counter ===  numRows), 'more problemsAAA');

              zigMatrix.push(tempArray);
              tempArray = (Array(numRows).fill("",0));
              console.log(possibleZigWhereReset,counter, 'check possible')

              tempArray[possibleZigWhereReset] = s[i];
              zigMatrix.push(tempArray);
          } else {
          // console.log(i, 'AAAAAAAAAAAAAAAA')
          tempArray[counter] = s[i];
          zigMatrix.push(tempArray);
          }


      } else if (counter===numRows) {
          zigging = true;


          if (numRows===1 ||numRows===2) {

              zigMatrix.push(tempArray);
              tempArray = (Array(numRows).fill("",0));
              counter = 0;
              tempArray[counter] = s[i];
              counter ++;

          } else {
          // console.log('nope');
          // console.log(zigMatrix, 'what is this')
          zigMatrix.push(tempArray);
          tempArray = (Array(numRows).fill("",0));
          tempArray[zigWhere] = s[i];
          zigMatrix.push(tempArray);
          tempArray = (Array(numRows).fill("",0));
          console.log(zigWhere, 'zigWhere')
          zigWhere-=1;

          if (zigWhere===0) {
              console.log('triggered');
              counter=0;
              zigWhere = possibleZigWhereReset;
              zigging=false;

          }


          }




      }


  }

  //PAYPALISHIRING


  console.log(zigMatrix, 'hmm');

  let string = ''
      for (let j = 0; j<numRows; j++) {

              for (let i = 0; i< zigMatrix.length; i++) {

          string += zigMatrix[i][j];
          // console.log(j, i, 'the letter')

      }
  }

  console.log(string, 'what is this')
  return string;
};