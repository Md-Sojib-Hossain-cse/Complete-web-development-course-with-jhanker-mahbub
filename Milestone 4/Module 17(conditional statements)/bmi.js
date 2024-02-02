var weight = 54;
var height = 154;

height = height / 100;

var bmi = parseFloat(weight / height**2).toFixed(2);

if(bmi <= 18.4){
    console.log(bmi);
    console.log("You are Underweight");
}
else if(bmi <= 24.9){
    console.log(bmi);
    console.log("You are Normal");
}
else if(bmi <= 39.9){
    console.log(bmi);
    console.log("You are Overweight");
}
else{
    console.log(bmi);
    console.log("You are Obese");
}