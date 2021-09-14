/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function (rounds = 3) {
    var total = rounds;
    var iteration = 0;
    var solutions = ['R','P','S'];
    var emptyArray = [];
    // i need an innerFunction

    //what is going in?  I think just a string.

    //this string will spit return 3 different strings, one with r, one with p, one with s

    //the first innerFunction is simply given an empty string and will once it figures out total is empty will push those 3 strings

    //construct the base case first.  It will take in an empty string and tack on the letter and realizing that this is the last round push

    //it will use a for loop to do so

    //the for loop will run through solutions

    //it will then for each one paste the empty string to the letter and push it

    var innerFunction = function (string) {
        if (string.length === total-1) {
            //this checks that we are missing one letter
            for (var i = 0; i<solutions.length; i++) {
                emptyArray.push((string + solutions[i]));
            }
        }else {
            for (var j = 0; j<solutions.length; j++) {
                console.log('hello');
                console.log(solutions[j])
                innerFunction((string+solutions[j]));
            }
        }
        //in the else case where total still has more rounds to go it is going to make the new string

        //and shove it back into innerFunction
    }
    innerFunction('');
    console.log(emptyArray);
    return emptyArray;


  // TODO: your solution here
};

rockPaperScissors();