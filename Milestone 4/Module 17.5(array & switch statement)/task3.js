//creating an array of books containing different books
const myBooks = ['programming in java','programming in python','javascript','object oriented programming','web development'];

//checking that is there have any javascript book or not
myBooks.includes('javascript');

//printing a message wether the book is in there or not
if(myBooks.includes('javascript')){
    console.log("This book is available.");
}
else{
    console.log("This book is not available.");
}
