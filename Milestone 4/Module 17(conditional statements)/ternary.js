// Ternary operator 


// Simple ternary 
// const price = 500;

/* 
if (price > 300){
    console.log("picnic e jamu");
}
else{
    console.log("jamu na kothao");
} 
*/

// price > 300 ? console.log("jamu") : console.log("jamu na")



// simple ternary 


let price = 600;

price = price > 500 ? price / 2 : 0 
console.log(price);



// semi complex ternary 

/* let price = 600 ;
const isLeader = false; */

/* 
if(isLeader == true){
    if(price > 500){
        price = price / 2;
        console.log(price);
    }
    else{
        price = 0;
        console.log(price);
    }
}
else{
    price = price + 100;
    console.log(price);
} 
*/

/* price = isLeader === true ? price > 500 ? price / 2 : 0 : price + 100
console.log(price); */