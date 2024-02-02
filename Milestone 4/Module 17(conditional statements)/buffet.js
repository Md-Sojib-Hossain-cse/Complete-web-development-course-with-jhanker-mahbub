const price = 500;
const age = 67;

if(age <= 12){
    console.log("Food is free for you..");
}
else if (age >= 60){
    // 50% discount
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else{
    console.log(price);
}