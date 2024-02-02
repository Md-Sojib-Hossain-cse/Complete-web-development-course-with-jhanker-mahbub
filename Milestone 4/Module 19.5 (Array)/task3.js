// ### Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.
// **Output:**
// `'TomTimTinTik'`


var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let newString = '';
for(let elem of numbers){
    newString = newString.concat(elem);
}
console.log(newString);