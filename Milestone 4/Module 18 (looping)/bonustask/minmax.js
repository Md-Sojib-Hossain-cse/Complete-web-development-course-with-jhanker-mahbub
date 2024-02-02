const number = [34, 53 , 34, 64 , 74 , 23, 35];

let minNum = number[0];
let maxNum = number[0];

for(let i = 0 ; i < number.length; i++){
    const currentNumber = number[i];
    if(minNum > currentNumber){
        minNum = currentNumber;
    }
    else if(maxNum < currentNumber){
        maxNum = currentNumber;
    }
}

console.log (minNum , maxNum);