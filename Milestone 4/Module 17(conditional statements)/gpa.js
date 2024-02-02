const bangla = 78;
const english = 87;
const math = 68;
const biology = 59;
const physics = 82;
const chemistry = 71;

const total = bangla + english + math + biology + physics + chemistry;
const average = (total / 6).toFixed(2);

console.log("Total marks : " + total);
console.log("Average mark : " + average);

if (average >= 80){
    console.log("You Got A+");
}
else if (average >= 75){
    console.log("You Got A");
}
else if (average >= 70){
    console.log("You Got A-");
}
else if (average >= 65){
    console.log("You Got B+");
}
else if (average >= 60){
    console.log("You Got B");
}
else if (average >= 55){
    console.log("You Got B-");
}
else if (average >= 50){
    console.log("You Got C+");
}
else if (average >= 45){
    console.log("You Got C");
}
else if (average >= 40){
    console.log("You Got D");
}
else {
    console.log("Better luck next time..")
}
