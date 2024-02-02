// ### Task-2: 
// Count how many times a string has the letter `a` or `A`


const sentence = "A cat and a dog eagerly awaited their turn at the adoption event.";
sentence.toLowerCase;

// using for of loop 
/* 
let counter = 0;
for(let letter of sentence){
    if(letter == 'a'){
        counter++;
    }
}
console.log(counter);
 */

//using for loop
/* 
let counter = 0;
for (let i = 0; i < sentence.length; i++) {
    if(sentence[i] == 'a'){
        counter++;
    }
}
console.log(counter);
 */



//using split and while loop
let letters = sentence.split('');
let isAvailable = letters.includes('a');
let i = 0;
counter = 0;
while(i < sentence.length){
    if(letters[i] === 'a'){
        counter++;
    }
    i++;
}

console.log(isAvailable);
console.log(counter);