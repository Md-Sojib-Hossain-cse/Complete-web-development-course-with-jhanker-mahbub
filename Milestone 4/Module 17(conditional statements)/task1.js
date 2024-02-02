const burgerPrice = 550;

if (burgerPrice >= 500){
    console.log("You will get a free drink from us...");
    const total = burgerPrice + 0;
    console.log("Total bill : " + total);
}
else{
    console.log("You have to add 30tk for a coke...");
    const total = burgerPrice + 30;
    console.log("Total bill : " + total);
}