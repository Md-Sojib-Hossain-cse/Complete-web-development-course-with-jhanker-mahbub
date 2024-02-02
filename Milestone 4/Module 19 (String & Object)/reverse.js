const adress = "pashapur , laksham , cumilla";


// with for of 
/* 
let reverse = "";
for (let letter of adress){
    reverse = letter + reverse;
}
console.log(reverse);
 */


// using for loop
/* 
let reverse  = "";
for(let i = 0; i< adress.length; i++){
    reverse = adress[i] + reverse;
}
console.log(reverse);
 */
//using for loop
/* 
let reverse = "";
for(let i = (adress.length - 1) ; i >= 0 ; i--){
    reverse = reverse + adress[i];
}
console.log(reverse);
 */


//Using reverse method
let reverse = adress.split("").reverse().join("");
console.log(reverse);
