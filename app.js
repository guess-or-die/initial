/* global words */
/* exported onSubmit */
/* exported loadGame */
//initial empty array for individual letters
var gameinit = words.slice();
var index = getRandomIndex(words.length);
var phrase = gameinit[index].split('');

function loadGame() {

    console.log(phrase);
    var output = document.getElementById('output');
    output.textContent = phrase.join(' ');
}


function onSubmit() {
    var userGuess = document.getElementById('guess');
    var elements = userGuess.elements;

    var guessInput = elements.guess;
    var theirGuess = guessInput.value;

    
    console.log(theirGuess);
    
    // var count = phrase.length;
    // for (var i = 0; i < count; i++) {
    //     if (phrase[i] === userGuess) {
    //         console.log('good choice');
    //     }
    // }
    // return false;
}

// log submission into array

//if submit button contains letter that is in the word(array), show letter

//pop off letter from array .pop() - game is done when no more letters in array!

//if letter is not, create alert





// based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIndex(length) {
    //The maximum is exclusive and the minimum (0) is inclusive
    return Math.floor(Math.random() * length);
}
    