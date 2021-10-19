function isZigzag(numbers) {

  let finalArray = [];

  for (let i=0; i<numbers.length-2; i++) {
      let upZag=null;
      let previousNumber=numbers[i];
      console.log(previousNumber, 'what is thi');

      for (let j = 1; j<3; j++) {
          let secondNumber;
          if (numbers[i+j]===previousNumber) {
              finalArray.push(0);
              break;
          }

          if (upZag!==null) {
              if ((numbers[i+j]-previousNumber)*upZag <0 ) {
                  finalArray.push(1);
                  previousNumber = null;

                  break;
              } else {
                  finalArray.push(0);
                  previousNumber = null;
                  break;
              }



          }


          if (numbers[i+j]>previousNumber) {
              upZag=1;
              previousNumber = numbers[i+j];

          } else {
              upZag=-1;
              previousNumber = numbers[i+j];
          }
      }



  }

  return finalArray;
}
