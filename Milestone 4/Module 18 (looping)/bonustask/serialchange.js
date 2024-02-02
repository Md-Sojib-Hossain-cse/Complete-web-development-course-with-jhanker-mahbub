let numbers = [45 , 98, 34, 63 , 23, 64];
let target = 63;

while(true){
    const firstNumber = numbers[0];
    if(firstNumber == target){
        break;
    }
    let extractedNumber = numbers.shift();
    numbers.push(extractedNumber);
}
console.log(numbers);