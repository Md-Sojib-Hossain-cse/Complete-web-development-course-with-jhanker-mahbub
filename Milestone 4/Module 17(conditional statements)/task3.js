const bangla = 78;
const english = 69;
const math = 98;
const physics = 67;
const chemistry = 71;
const biology = 59;

const total = bangla + english + math + physics + chemistry + biology;
const average = parseFloat(total / 6).toFixed(2);

console.log("Total marks : " + total);
console.log("Average :" + average);

if(average >= 90 ){
    console.log("You got A");
}
else if(average >= 80 ){
    console.log("You got B");
}
else if(average >= 70 ){
    console.log("You got C");
}
else if(average >= 60 ){
    console.log("You got D");
}
else{
    console.log("You got F , better luck next time...");
}