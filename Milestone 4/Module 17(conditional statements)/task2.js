const weight = 54;
const height = 154;

const bmi = parseFloat(weight / (height / 100)**2).toFixed(2);

console.log("Your BMI is :" + bmi);

if(bmi < 18.5){
    console.log("You are Underweight");
}
else{
    if(bmi >= 18.5 && bmi <= 24.9){
        console.log("You are Normal");
    }
    else{
        if(bmi >= 25 && bmi <= 29.9){
            console.log("You are Overweight");
        }
        else{
            console.log("You are obese");
        }
    }
}