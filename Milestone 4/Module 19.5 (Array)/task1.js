// ### Task 1
// Write a JavaScript code to reverse the array colors `without using the reverse method`.

// **Output:**
// `['orange', 'yellow', 'green', 'blue', 'red']`

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let reverseColors = [];

//Using normal for loop
/* 
for (let i = 0; i < colors.length; i++) {
    reverseColors.unshift(colors[i]);
}
console.log(reverseColors);
 */

//using for of
/* 
for(let color of colors){
    reverseColors.unshift(color);
}
console.log(reverseColors);
 */


//using while loop
/* 
let i = 0;
while(i < colors.length){
    reverseColors.unshift(colors[i]);
    i++;
}
console.log(reverseColors);
 */



//using reverse method
/* 
reverseColors = colors.reverse();
console.log(reverseColors);
 */



//Using reverse for loop
for (let i = colors.length - 1; i >= 0; i--) {
    reverseColors.push(colors[i]);
}
console.log(reverseColors);