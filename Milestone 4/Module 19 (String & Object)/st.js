// ### Task-5:
// Capitalize Every first Letter of each word in a String

const sentence = "A cat and a dog eagerly awaited their turn at the adoption event.";

const splitSentence = sentence.split(" ");
let converted = "";

for(let letter of splitSentence){
    let charecter = letter.split('');
    charecter[0] = charecter[0].toUpperCase();
    letter = charecter.join("");
    converted = converted + " " + letter;
}

console.log(converted);