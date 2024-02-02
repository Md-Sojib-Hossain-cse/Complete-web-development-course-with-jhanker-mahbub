let num = 1;
let multiplicationTable = 5;
let multiplicationResult = 0;

console.log("Ersa generate a multiplication table for number 5...");

while(num <= 10){
    multiplicationResult = multiplicationTable * num;
    console.log(multiplicationTable , "*" , num , "=" , multiplicationResult);
    num++;
}