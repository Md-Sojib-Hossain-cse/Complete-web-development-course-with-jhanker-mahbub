let oddNumbers = 61;
let evenNumbers = 78;

console.log("Odd numbers : ");
while (oddNumbers <= 100){
    if(oddNumbers % 2 === 1){
        console.log(oddNumbers);
    }
    oddNumbers++;
}

console.log("Even numbers : ");
while (evenNumbers <= 98){
    if(evenNumbers % 2 === 0){
        console.log(evenNumbers);
    }
    evenNumbers++;
}