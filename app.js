/* global words onload */
/* exported getRandomWord */
//initial empty array for individual letters
var cheesecake = [];


function getRandomWord() {
    var onload = words.slice();
    var index = getRandomIndex(words.length);
    var phrase = onload[index].split('');


    console.log(phrase);
    var output = document.getElementById('output');
    output.textContent = phrase.join(' ');
    
    //in the output, phrase[0] returns first letter, 
    //console.log(output); 
}
//need an empty array outside the for loop send to the  section id=output



//similar working ref: https://stackoverflow.com/questions/8131838/returning-values-out-of-for-loop-in-javascript
// function getId(a){
    //     var aL = a.length;
//     var values = [];
//     for(i = 0; i < aL; i++ ){
//       values.push(a[i][2].split(":", 1)[0]);
//     }    
//     return values.join('');
//   } 
//print letters container  to section id=output
//add a function from user input to compare with word in the queue
//get total number of turns
//


// based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIndex(length) {
    //The maximum is exclusive and the minimum (0) is inclusive
    return Math.floor(Math.random() * length); 
}