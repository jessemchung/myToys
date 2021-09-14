/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.


var bubbleSort = function(array) {
  var newArray = array;
  var start = 0
  while (start<newArray.length-1) {
  var swaps = false;
  for (var i = 0; i< (newArray.length-(1)); i++) {
      console.log(i, newArray[i], 'i');
     if(newArray[i]> newArray[i+1]) {
         console.log(newArray[i], 'hmmm');
         var old1 = newArray[i];
         var old2 = newArray[i+1];
         newArray[i] = old2;
         newArray[i+1] = old1;
         swaps = true;
     }
  }
  console.log(newArray);
  console.log(swaps, 'any swaps?');
  if (!swaps) {
      return newArray;
  }
  start++;

  }
// Your code here.
return newArray;
};


bubbleSort([2, 8, 1, 6, 3, 7, 4]);