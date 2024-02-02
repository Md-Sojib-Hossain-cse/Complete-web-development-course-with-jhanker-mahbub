// ### Task-1: 
// Count how many times a string has the letter `a`

const example = "The most straightforward way to create an object is by using object literal notation.";

// for of loop
/* 
let counter = 0;
for(let i of example){
    if(i == 'a'){
        counter++;
    }
}
console.log(counter);
 */


//for loop
/* 
let counter = 0;
let storage = "";
for(let i = 0; i < example.length; i++){
    storage = example[i];
    if(storage == 'a'){
        counter++;
    }
}
console.log(counter);
 */


//Using split and for loop
let counter = 0;
let exampleArray = example.split("");
console.log(exampleArray);

for (let i = 0; i < exampleArray.length; i++){
    if(exampleArray[i] == 'a'){
        counter++;
    }
}
console.log(counter);