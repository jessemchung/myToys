/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */



 var quicksort = function(array) {
  var copyArray = Array.from(array);

  var sorter = function(array) {
      if (array.length ===1 || array.length ===0) {
          return array;
      }

      var pivot = array.pop();
      var lowerArray = [];
      var higherArray = [];
      for (var i of array) {
          if (i>=pivot) {
              higherArray.push(i);
          } else if (i<pivot) {
              lowerArray.push(i);
          }
      }

      return [...sorter(lowerArray), pivot, ...sorter(higherArray)];


  };
  return sorter(copyArray);

};

