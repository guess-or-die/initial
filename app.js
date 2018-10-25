/* global words */

// dynamic: turns total, letters, output, stage
// inputs: submit

//var userInput = document.getElementById('guess');

// what if they submit more than one letter? or 0 letters


// take that js file and select a random input from the array
/* exported getRandomWord */
var onload = words.slice();

function getRandomWord () {
    var index = getRandomIndex(words.length);
    //console.log(index);
    var retrievedWord = onload[index];
    //console.log(retrievedWord);
   
    //figure out the length of the word
    for (var 

    
    
    
    //add a function that loads the retrievedWord into a game queue
    //get total number of letter ---is this a while loop? is this a for loop
    //print letters container from to section id=output
    //add a function from user input to compare with word in the queue
    //get total number of turns
    //

}



// based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIndex(length) {
    //The maximum is exclusive and the minimum (0) is inclusive
    return Math.floor(Math.random() * length); 
}