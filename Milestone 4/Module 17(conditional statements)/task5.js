let num1 = 70;
let num2 = 60;
let result;

// with conditional statement 
if(num1 > num2){
    result = num1 * 2;
    console.log(result);
}
else{
    result = num1 + num2;
    console.log(result);
}



// with ternary operator
result = num1 > num2 ? (num1 * 2) : (num1 + num2)
console.log (result);