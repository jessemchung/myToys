/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
  let trackIndex = [];
  for (let i=0; i<array.length; i++ ) {

      trackIndex.push(i);
  }



  const slicer = (array, target, tracker)=>{



      let cut = Math.floor(array.length/2);
      console.log(cut);
      if (array[cut]===target) {
          console.log(tracker[cut]);
          return tracker[cut];

      } else if (target>array[array.length-1]||target<array[0]) {
          console.log('we reached the end');
          return null;
      } else if (array[cut]>target) {
          console.log('hello');
          //take lower half
          let lowerSlice = array.slice(0,cut);
          let lowerIndex = tracker.slice(0,cut);
          slicer(lowerSlice, target, lowerIndex);


      } else if (array[cut]<target) {
          //take upper half
          let upperSlice = array.slice((cut+1));
          let upperIndex = tracker.slice((cut+1));
          slicer(upperSlice, target, upperIndex);
      }



  }

  slicer(array, target, trackIndex);

};