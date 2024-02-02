// ### Task-4: 
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.


let sentence = "The xellow xacht gracefullX sailed through the crystal-clear bay, as joXful seagulls circled overhead, enjoxing the sunny daX.";

//replace() method with global flag
/* 
let newSentence = sentence.replace(/x/g,'y');
newSentence = newSentence.replace(/X/g,'Y');
console.log(newSentence);
 */


//replaceAll() method
let newSentence = sentence.replaceAll('x','y');
newSentence = newSentence.replaceAll('X','Y');
console.log(newSentence);