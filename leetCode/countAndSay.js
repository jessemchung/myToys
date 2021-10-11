/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {

  if (n===1) {
      return '1';
  }
  let secondStep = '1'
  let firstStep;

  for (let i =0; i<n-1; i++) {
      firstStep = countTheWords(secondStep);
      secondStep = objectToWordString(firstStep);

  }
  return secondStep;
};



const countTheWords = (stringNumber) => {

  let newObject = [];
  let continuousChecker;
  for (let i = 0; i<stringNumber.length; i++) {
      if (i===0) {
          continuousChecker = [1, stringNumber[i]]
          continue;
      }

      if (continuousChecker[1] !== stringNumber[i]) {
          newObject.push(continuousChecker)
          continuousChecker = [1, stringNumber[i]]
      } else if (stringNumber[i] === continuousChecker[1]) {
          continuousChecker[0]++;
      }



  }

  newObject.push(continuousChecker);
  return newObject;

}


const objectToWordString = (object) => {
  let string = '';
  for (let i=0; i<object.length; i++) {
      string+=object[i][0];
      string+=object[i][1];
  }
  return string;

}


