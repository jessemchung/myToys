// /**
//  * @param {number[]} height
//  * @return {number}
//  */
// //input: an array
// //output: an volume (a single integer)
// //basically the difference of 1 is a length of 1 (the peaks are sticks)
// //


// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// Notice that you may not slant the container.


var maxArea = function(height) {
  let finalVolume = (height.length-1)*(height[0]>height[height.length-1] ? height[height.length-1] : height[0]);

  let maxLeftHeight = height[0];
  let maxLeftPlacement = 0;
  let maxRightHeight = height[height.length-1];
  let maxRightPlacement = height.length-1;


  let newVolume = 0;

  for (let i=0; i<height.length; i++) {
  if (height[maxLeftPlacement]>height[maxRightPlacement]) {
          maxRightPlacement--;


      // (finalVolume<newVolume) ? finalVolume = newVolume : null );

      } else {
          maxLeftPlacement++;


      }

//         console.log(Math.min(maxRightHeight, maxLeftHeight)*(maxRightPlacement-maxLeftPlacement))

      newVolume = Math.min(height[maxLeftPlacement], height[maxRightPlacement])*(maxRightPlacement-maxLeftPlacement);
      // (finalVolume<newVolume) ? finalVolume = newVolume : null;

      finalVolume<newVolume ? finalVolume = newVolume : null;
      //evidently errors with using parents
  }

// for (let i = 0; i < height.length; i++) {

//     for (let j=1; j<height.length-i; j++) {
//         let volume = (j) * (height[i]>height[i+j] ? height[i+j] : height[i])

//         finalVolume<volume ? finalVolume=volume : null;

//     }
//     }
  return finalVolume
};




