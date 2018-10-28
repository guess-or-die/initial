/* global words */
/* exported onSubmit */
/* exported loadGame */
//initial empty array for individual letters
var gameInit = words.slice();
var index = getRandomIndex(words.length);
var phrase = gameInit[index].split('');


function loadGame() {
    //Is it too soon to clean up the comment notes in the function loadGame?  Are we using this?
    // var output = document.getElementById('output');
    console.log(phrase);
    //output.textContent = phrase.join(' ');
    var tally = document.querySelectorAll('.letter');
   //console.log(tally);
    for(var i = 0; i < tally.length; i++){
        var li = tally[i];
        if(i < phrase.length) {
            li.classList.remove('hidden');
        }
        else {
            li.classList.add('hidden');
        }
    }
}
var guessTotals = [];

function onSubmit() {
    var userGuess = document.getElementById('answer-field');
    var elements = userGuess.elements;
    
    var guessInput = elements.guess;
    var theirGuess = guessInput.value;
    
    for(var i = 0; i < phrase.length; i++) {
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



//if submit button contains letter that is in the word(array), show letter
 //if letter is not in word, create alert





// based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIndex(length) {
    //The maximum is exclusive and the minimum (0) is inclusive
    return Math.floor(Math.random() * length);
}
    