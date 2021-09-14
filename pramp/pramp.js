function numOfPathsToDest(n) {

  let smallerN = (n-1);
  // your code goes here
  let counter = 0;

  //this is a recursive problem

  //input is a number
  //output is also a number

  //example n = 2

  //output should be 1

  let innerFunction = (x, y)=> {
    console.log(x, y, 'inner')
    if (y>x) {
      console.log('out of bounds')
      return
    }

    if (x>smallerN && y===smallerN || y>smallerN && x===smallerN) {

      console.log('we are triggered', x, y)
      counter+= 1;
      return
    } else if (x>smallerN || y>smallerN) {
      return
    }

    innerFunction(x+1, y);
    innerFunction(x, y+1);
  }

  innerFunction(0,0)

  console.log(counter, 'hi this is counter');
  return counter;


}


numOfPathsToDest(4);