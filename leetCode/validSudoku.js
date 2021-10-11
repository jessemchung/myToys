/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {

  let eachSlot = {
      '00': [],
      '01': [],
      '02': [],
      '10': [],
      '11': [],
      '12': [],
      '20': [],
      '21': [],
      '22': [],

  }
  let horizontal = [];
  let vertical = [];

  for (let i=0; i<board[0].length; i++) {

      horizontal = [];
      vertical = [];

      for (let j = 0; j<board[0].length;j++) {


          if (horizontal.includes(board[i][j])&& board[i][j]!== '.') {
              return false;
          }

          if (vertical.includes(board[j][i]) && board[j][i]!== '.') {
              return false;
          }


          if (eachSlot[''+Math.floor(i/3)+Math.floor(j/3)].includes(board[i][j]) && board[i][j]!== '.') {
              return false;
          }

          horizontal.push(board[i][j]);
          eachSlot[''+Math.floor(i/3)+Math.floor(j/3)].push(board[i][j]);
          vertical.push(board[j][i]);

      }

  }



  return true;
};


