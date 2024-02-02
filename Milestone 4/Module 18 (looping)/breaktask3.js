//Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)


let i = 1;
let n = 2;
let sr = 0;

while (n <= 10){
    sr = n * n;
    while(i <= 100){
        if(i == sr){
            break;
        }
        console.log(i);
        i++;
    }
    console.log("Square root value :" , sr);
    sr = 0;
    n++;
}