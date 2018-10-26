/* global words */
/* exported onSubmit */
/* exported loadGame */
//initial empty array for individual letters
var gameInit = words.slice();
var index = getRandomIndex(words.length);
var phrase = gameInit[index].split('');
var linesplatz = phrase.length;

function loadGame() {
    var output = document.getElementById('output');
    //console.log(phrase);
    //output.textContent = linesplatz;
    
    for(var i = 0; i < phrase.length; i++) {
    //get the length of the word before gameplay and issue total number of tiles
    

    }
}
var guessTotals = [''];

function onSubmit() {
    var userGuess = document.getElementById('answer-field');
    var elements = userGuess.elements;
    
    var guessInput = elements.guess;
    var theirGuess = guessInput.value;
    
    for(var i = 0; i < linesplatz; i++) {
        if(phrase[i] === theirGuess) {
            //console.log('good choice');
            guessTotals.push(phrase[i]);
            output.textContent = phrase[i];
            console.log('this is your initial array ' + phrase);
            console.log('this is your return array ' + guessTotals);
        }
    }
    return false;
    
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
    