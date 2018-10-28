/* global words */
/* exported onSubmit */
/* exported loadGame */
//initial empty array for individual letters
var gameInit = words.slice();
var index = getRandomIndex(words.length);
var phrase = gameInit[index].split('');

function loadGame() {
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
var guessLetters = [''];
var guessCount = 0;

function onSubmit() {
    var userGuess = document.getElementById('answer-field');
    var elements = userGuess.elements;
    var submit = elements.guess;
    var theirGuess = submit.value;
    var turnsTotal = document.getElementById('turns-total');

    // for(var i = 0; i < phrase.length; i++) {
    if(phrase[i] === theirGuess) {
        guessLetters.push(phrase[i]);
        turnsTotal.textContent = 'good choice!';
        
        console.log('this is your initial array ' + phrase);
        console.log('this is your return array ' + guessLetters);
    }
    else {
        guessCount = guessCount + 1;
        console.log(guessCount);

        if(guessCount < 6){
            turnsTotal.textContent = 'try again!';
        }
        else {
            turnsTotal.textContent = 'you lose. sorry!';
            submit.disabled = true;
        }
    }
}
    
// }

// log submission into array

//if submit button contains letter that is in the word(array), show letter

//pop off letter from array .pop() - game is done when no more letters in array!

//if letter is not, create alert





// based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIndex(length) {
    //The maximum is exclusive and the minimum (0) is inclusive
    return Math.floor(Math.random() * length);
}