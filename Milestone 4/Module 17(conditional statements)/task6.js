const regularFare = 800;
const isStudent = true;
const age = 21;

console.log("You have to pay ....")

if(age < 10){
    const childrenFare = 0;
    console.log("Children fare :" , childrenFare , "tk");
}
else if(isStudent === true){
    const studentFare = regularFare / 2;
    console.log("Student fare :" , studentFare , "tk");
}
else if(age >= 60){
    const seniorCitizenFare = regularFare * 15 / 100;
    console.log("Senior Citizen fare :" , seniorCitizenFare , "tk");
}
else{
    console.log("Regular fare :" , regularFare , "tk");
}