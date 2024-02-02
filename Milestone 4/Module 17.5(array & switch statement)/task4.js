//Declaring some variables and array
const personName = 'sojib';
const personAge = 21;
const favoriteGames = ['cricket','badminton'];

//using isArray to check if each variable is an array and containing them in different variable so that i can print them later
const firstVariable =  Array.isArray(personName);
const secondVariable = Array.isArray(personAge);
const thirdVariable = Array.isArray(favoriteGames);

// Printing a message to the console indicating whether each variable is an array or not.
//check first variable
if(firstVariable){
    console.log("First variable is an array..");
}
else{
    console.log("First variable in not an array..");
}

//check second variable
if(secondVariable){
    console.log("Second variable is an array..");
}
else{
    console.log("Second variable in not an array..");
}

//check third variable
if(thirdVariable){
    console.log("Third variable is an array..");
}
else{
    console.log("Third variable in not an array..");
}