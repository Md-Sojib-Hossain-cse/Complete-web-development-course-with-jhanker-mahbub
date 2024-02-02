let n = 1;

while(n < 50){
    n++;
    if(n % 3 !== 0  && n % 5 !== 0){
        continue;
    }
    console.log(n);
}