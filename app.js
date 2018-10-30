/* global words */
/* exported onSubmit */
/* exported loadGame */
/* exported resetButton */

//initial empty array for individual letters
var gameInit = words.slice();
var index = getRandomIndex(words.length);
var phrase = gameInit[index].split('');

function loadGame() {
    console.log(phrase);
    var tally = document.querySelectorAll('.letter');
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

    for(var i = 0; i < phrase.length; i++) {
        if(phrase[i] === theirGuess.toLowerCase()) {
            correctLetters.push(phrase[i]);
            var li = document.getElementById('letter-' + i);
            li.textContent = theirGuess;
        }
    }
    guessCount += 1;
    
    console.log(guessCount);
    
    
    var turnsTotal = document.getElementById('turns-total');
    var triesLeft = 6 - guessCount;
    turnsTotal.textContent = 'You have ' + triesLeft + ' tries left';
    if(guessCount === 6){
        turnsTotal.textContent = 'TRY BETTER NEXT TIME LOSER';
        
    }   
    console.log('this is your initial array ' + phrase);
    guessedLetters.push(theirGuess);
    var letterLog = document.getElementById('letters');
    letterLog.textContent = guessedLetters.join(' ');  
    

    
}
 
console.log('this is your initial array ' + phrase);
console.log('this is your return array ' + correctLetters);


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