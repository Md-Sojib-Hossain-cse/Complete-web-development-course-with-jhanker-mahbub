// ### Task-3: 
// Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u` 


const sentence = "A cat and a dog eagerly awaited their turn at the adoption event.";

//using if else and include method
if(sentence.includes('a') == true && sentence.includes('e') == true && sentence.includes('i') == true && sentence.includes('o') == true && sentence.includes('u') == true){
    console.log("All the vowels are available in this sentence");
}
else{
    console.log("This sentence didn't contain all the vowels..");
}


// using for loop and  if ...else if ...else
/* 
let countera =0;
let countere =0;
let counteri =0;
let countero =0;
let counteru =0;
for(let i of sentence){
    if(i == 'a'){
        countera++;
    }
    else if(i == 'e'){
        countere++;
    }
    else if(i == 'i'){
        counteri++;
    }
    else if(i == 'o'){
        countero++;
    }
    else if(i == 'u'){
        counteru++;
    }
}

if(countera > 0 && countere > 0 && counteri > 0 && countero > 0 && counteru > 0){
    console.log("All the vowels are available in this sentence");
}
else{
    console.log("This sentence didn't contain all the vowels..");
}
 */