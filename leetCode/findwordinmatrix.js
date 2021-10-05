/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {

  let finalBoolean = false;
  //IOCE

  //input is a matrix with letters in it

  //output is a boolean value
  // not ncesarily a square

  //edge cases

  //constraint, is that we cannot go back to our previous letter
  // [[A]]


  //word a


  //memo, I have to turn every letter into lower case in case

  //check each letter if it is equal to the first letter

  //I am going to want a direction option

  let directions = [[1,0],[0,1],[-1,0], [0,-1]];


  //constraint, it has to stay in the boxes

  let checkCurrentBox = (index, location, allSpotsUsed) => {

      if (finalBoolean === true) {
          return;
      }

      let newArray = Array.from(allSpotsUsed);


      let locationString = ''+location[0] + '/' + location[1]

      if (allSpotsUsed.includes(locationString)) {

          return;

      } else {
          newArray.push(locationString);
      }

      // console.log(board[location[0]][location[1]])
      if (board[location[0]]===undefined || board[location[0]][location[1]] === undefined) {

          return;
      }


      if (index===word.length-1 && board[location[0]][location[1]]===word[index]) {
          finalBoolean=true;

          return;

      }

      if (board[location[0]][location[1]]===word[index]) {
          for (let direc of directions) {
              // console.log(direc, 'these are the direction');

              let newLocation = [location[0]+direc[0], location[1]+direc[1]];
              checkCurrentBox(index+1, newLocation, newArray)

          }
      }

      //if the location found is the correct letter, we set continue to be true

      //then we check if continue was true

      //if it true, we check every direction and run checkCurrentBox on that direction
  }

  for (let a = 0; a<board.length; a++) {

      for (let b= 0; b<board[0].length;b++) {


          checkCurrentBox(0, [a,b], [])
      }

  }



      return finalBoolean;


  //first thing, we need to look through the board
  //by row
  //by column and check each if the letter is equal to the first letter of the word we have in arguments
  //then once that is found

  //we could try and run a for loop based on the length of the word to check all surrounding options

  //

};
