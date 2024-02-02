// even numbers 
/* 
for ( let i = 1 ; i <= 10; i++){
    if(i % 2 === 0){
        console.log(i);
    }
} 
*/


/* 
for (let i = 1 ; i <= 10 ; i++){
    if(i % 2 !== 1){
        console.log(i);
    }
}
 */


/* 
for (let i = 2 ; i<=10 ; i += 2){
    console.log(i);
}
 */


/* 
for (let i = 2 ; i <= 10 ; i  = i + 2){
    console.log(i);
}
 */



//numbers who's are  divisible by 3 and 5 between 1 to 30
/* 
let number = 1;
while(number <= 30){
    if(number % 3 === 0  || number % 5 === 0){
        console.log(number);
    }
    number++;
}
 */


//numbers who's are either divided by 3 neither divisible by 5 between 1 to 30
/* 
let number = 1;
while(number <= 30){
    if(number % 3 === 0  && number % 5 === 0){
        console.log(number);
    }
    number++;
}
 */


//sum of those numbers who's are divisible by 3
let num = 0;
let sum = 0;

while(num <= 100){
    if(num % 3 === 0){
        console.log(num);
        sum = sum + num;
    }
    num++;
}
console.log(sum);