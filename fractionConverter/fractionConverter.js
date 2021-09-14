/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
// create variable x and y
    let newNumber = number;
    let y=1;
    let wholeNumber = 0;

    if (number>1) {
        wholeNumber = Math.floor(number);
        newNumber = number-wholeNumber;
        if (newNumber===0) {
            return `${wholeNumber}/1`;
        }


    }
    console.log(newNumber, y, 'something is amiss')
    let multiplier = y/newNumber;
    console.log(multiplier);
    y *= multiplier;
    newNumber *= multiplier;
    if (wholeNumber>0) {
        let added = wholeNumber*y;
        newNumber+=added;
        return `${newNumber}/${y}`
    }

    return `${newNumber}/${y}`
// create variable wholenumber with iniitial assignment 0
// then check if greater or less then 1
//     if greater
//     take the floor of the value
//     check if leftover bits is not 0 and if so
//         return 'wholenumber/1'
//     else continue to next step
// assign x to be argument
// assign y to be 1

// create variable y/x

// multiply both by this value
};


console.log(toFraction(3.0))
console.log(toFraction(0.5))
console.log(toFraction(2.5))