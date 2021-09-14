/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

 var allAnagrams = function(string) {
  // Your code here.

    var newArray = [];

    const innerFunction= (remainingString='', builtString='')=>{

    if(remainingString.length === 0){
        newArray.push(builtString);
    }

    for(var i=0;i<remainingString.length;i++) {
        //create a newremaining string
        //by taking out the piece that was remainingString
        //likely need a copy of the string
        let copyString = builtString;
        copyString+=remainingString[i];


        let firstPart = remainingString.slice(0,i)||'';
        let lastPart = remainingString.slice(i+1)||'';
        let newString = firstPart+lastPart;


        innerFunction(newString,copyString);


    }

    }

    innerFunction(string);

    return removeDupes(newArray);

};

var removeDupes = (array)=>{
  let newestArray = [];
  for (var i = 0; i<array.length; i++) {
    let state = true
    for(var j = i+1; j<array.length-i; j++) {
      if (array[i]===array[j]) {
        console.log('dupes');
        state=false;
      }

    }
    if (state===true){
      newestArray.push(array[i]);
    }

  }
  return newestArray;

}

