// ### Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// **Output:**
// `'person working hard a am I'`

const statement = 'I am a hard working person';
let splitStatement = statement.split(" ");

//using reverse() method
// let reversedStatement = splitStatement.reverse().join(" ");
// console.log(reversedStatement);



//Using for of 
// let reversedStatement = [];
// for(let words of splitStatement){
//     reversedStatement.unshift(words);
// }
// reversedStatement.join(" ");
// console.log(reversedStatement);