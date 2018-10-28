/* global words */
/* exported onSubmit */
/* exported loadGame */
/* exported resetButton */
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
    for(var i = 0; i < tally.length; i++) {
        var li = tally[i];
        if(i < phrase.length) {
            li.classList.remove('hidden');
        } 
        else {
            li.classList.add('hidden');
        }
    }
}
var correctLetters = [''];
var guessCount = 0;
var guessedLetters = [''];
var userGuess = document.getElementById('answer-field');

function onSubmit() {
    var elements = userGuess.elements;
    var submit = elements.guess;
    var theirGuess = submit.value;
    var turnsTotal = document.getElementById('turns-total');

    for(var i = 0; i < phrase.length; i++) {
        if(phrase[i] === theirGuess) {
            correctLetters.push(phrase[i]);
            turnsTotal.textContent = 'good choice!';

            console.log('this is your initial array ' + phrase);
            console.log('this is your return array ' + correctLetters);
        }
    }
        
    guessedLetters.push(theirGuess);
    var letterLog = document.getElementById('letters');
    letterLog.textContent = guessedLetters.join(' ');       
}
                
var letters = document.querySelectorAll('.letter');

for(var i = 0; i < letters.length; i++)
    var li = letters[i];
var letterToDisplay = correctLetters[i];

if(i < correctLetters.length) {
    li.textContent = letterToDisplay;
    // li.classList.remove('hidden');
} 
else {
    // li.classList.add('hidden');
}

function resetButton() {
    userGuess.reset;
}


//if submit button contains letter that is in the word(array), show letter

//splice off letter from array .pop() - game is done when no more letters in array!

//if letter is not, create alert





// based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIndex(length) {
    //The maximum is exclusive and the minimum (0) is inclusive
    return Math.floor(Math.random() * length);
}