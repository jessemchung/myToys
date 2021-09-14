
/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  // Your code here.

  var newObject = {};
  for (var val of arr) {
      if(newObject[val]) {
          newObject[val] += 1;
      }
      else{
      newObject[val] = 1
      }
  }
  for (var keystones in newObject) {
    console.log(newObject);
      if(newObject[keystones]%2===0) {
          for (var x of arr) {
            console.log(x, 'this is x');
            if(newObject[x]%2===0) {
              return x;
            }
          }

//           if (parseInt(keystones)) {
//             console.log('why');
//               return parseInt(keystones);
//           } else {
//             console.log('why');
//               return keystones;
//           }
      }
  }
  console.log('here');
  return null;

};


var onlyEven = evenOccurrence([1, 3, 3, 3, 2, 4, 4, 2, 5]);

console.log(onlyEven); //  4