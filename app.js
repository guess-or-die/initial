/* global words */
/* exported onSubmit */
/* exported loadGame */
/* exported resetButton */

var gameInit = words.slice();
var index = getRandomIndex(words.length);
var phrase = gameInit[index].split('');
var form = document.getElementById('answer-field');

console.log(phrase);

function loadGame() {
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
var guessedLetters = [''];
var userGuess = document.getElementById('answer-field');
var guessCount = 0;

function onSubmit() {
    var elements = userGuess.elements;
    var submit = elements.guess;
    var theirGuess = submit.value;

    if(phrase.includes(theirGuess)){
        for(var i = 0; i < phrase.length; i++) {
            if(phrase[i] === theirGuess.toLowerCase()) {
                correctLetters.push(phrase[i]);
                var li = document.getElementById('letter-' + i);
                li.textContent = theirGuess;
            }
        }
        if(correctLetters === phrase){
            turnsTotal.textContent = 'YOU WIN!';
            console.log('you win!');
        }
    }
    else {
        guessCount++;
        var turnsTotal = document.getElementById('turns-total');
        var triesLeft = 6 - guessCount;
        turnsTotal.textContent = 'You have ' + triesLeft + ' tries left';
        var lis = document.getElementById('gallows-' + guessCount);
        lis.classList.toggle('hidden'); 
    }
    
   
    if(guessCount === 6){
        turnsTotal.textContent = 'TRY BETTER NEXT TIME LOSER';
        submit.disabled = true;
    }   


    form.reset();
        
    guessedLetters.push(theirGuess);
    var letterLog = document.getElementById('letters');
    letterLog.textContent = guessedLetters.join(' ');     
}

function resetButton() {
    userGuess.reset;
}

// based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIndex(length) {
    //The maximum is exclusive and the minimum (0) is inclusive
    return Math.floor(Math.random() * length);
}