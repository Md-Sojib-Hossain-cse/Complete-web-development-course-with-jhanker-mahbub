let odd = 81;
let even = 206;
let sumOfOdd = 0;
let sumOfEven = 0;

while(odd <= 131){
    if(odd % 2 == 1){
        sumOfOdd = sumOfOdd + odd;
    }
    odd++;
}
console.log("Sum of all odd numbers is : " , sumOfOdd);


while(even <= 311){
    if(even % 2 === 0){
        sumOfEven = sumOfEven + even;
    }
    even++;
}

console.log("Sum of all even numbers is : " , sumOfEven);