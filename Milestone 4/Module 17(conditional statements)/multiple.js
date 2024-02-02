const salary = 25000;
const height = 66;
const isBCS = true;


// Basic condition

/* 
if (salary > 2500){
    console.log('bolo baba kobul');
}
else{
    console.log('vag tui mokbul')
}
*/

// multiple condition 
/*
if (salary > 25000 && isBCS == true){
    console.log("Bolo baba kobul");
}
else{
    console.log("vag tui mokbul");
}
*/

/* 
if (salary > 25000 || isBCS == true){
    console.log("Bolo baba kobul");
}
else{
    console.log("vag tui mokbul");
}
*/


// More and more condition 
/*
if (salary > 25000 || isBCS == true || height >56){
    console.log("Bolo baba kobul");
}
else{
    console.log("vag tui mokbul");
}
*/

/*
if (salary > 25000 && isBCS == true && height >56){
    console.log("Bolo baba kobul");
}
else{
    console.log("vag tui mokbul");
}
*/

// Complex condition 
/* if((salary > 20000 && height >66) || isBCS == true){
    console.log("bolo baba kobul");
}
else{
    console.log("vag tui mokbul");
} */

if((salary > 20000 || height >66) && isBCS == true){
    console.log("bolo baba kobul");
}
else{
    console.log("vag tui mokbul");
}