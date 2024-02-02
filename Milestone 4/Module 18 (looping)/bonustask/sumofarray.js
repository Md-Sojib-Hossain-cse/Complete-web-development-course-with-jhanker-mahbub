// Sum of array 

const arr = [19,39,348,43,23,23,53];
let sum = 0 ;

for (let i = 0 ; i < arr.length ; i++){
    const currentNumber = arr[i];
    sum = sum + currentNumber;
}
console.log(sum);