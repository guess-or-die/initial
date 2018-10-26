/* global words onload */
/* exported onSubmit */
/* exported loadGame */
//initial empty array for individual letters

function loadGame() {
    var onload = words.slice();
    var index = getRandomIndex(words.length);
    var phrase = onload[index].split('');
    
    console.log(phrase);
    var output = document.getElementById('output');
    output.textContent = phrase.join(' ');
}

function onSubmit() {

    // log submission into array

    //if submit button contains letter that is in the word(array), show letter

    //pop off letter from array .pop() - game is done when no more letters in array!

    //if letter is not, create alert


}


// based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIndex(length) {
    //The maximum is exclusive and the minimum (0) is inclusive
    return Math.floor(Math.random() * length); 
}