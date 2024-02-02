// ### Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

// **Output:**
// `[12, 98, 76, 46]`



const numbers = [12, 98, 5, 41, 23, 78, 46];


let evenNumbers = [];

// Using for of 
/* 
for(let number of numbers){
    if(number % 2 == 0){
        evenNumbers.push(number);
    }
}
console.log(evenNumbers);
 */


//using for loop
for(let i = 0 ; i < numbers.length ; i++){
    if(numbers[i] % 2 == 0){
        evenNumbers.push(numbers[i]);
    }
}
console.log(evenNumbers);