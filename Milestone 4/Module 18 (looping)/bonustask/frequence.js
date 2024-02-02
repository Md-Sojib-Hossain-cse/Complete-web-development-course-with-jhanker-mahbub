//Frequency array

let frequencyArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const randomDigit = '14781546420173284717176326';

for(let i = 0 ; i < randomDigit.length ; i++){
    const currentDigit = randomDigit[i];
    // frequencyArray[currentDigit] = frequencyArray[currentDigit] + 1;
    frequencyArray[currentDigit]++;
}
console.log(frequencyArray);


// maximum occurance 
let maxOccurance = frequencyArray[0];
let maxOccuranceIndex = 0;
let minOccurance = frequencyArray[0];
let minOccuranceIndex = 0;

for(let i = 0 ; i <= frequencyArray.length ; i++){
    const currentItem = frequencyArray[i];
    if(currentItem < minOccurance){
        minOccurance = currentItem;
        minOccuranceIndex = i;
    }
    else if(currentItem > maxOccurance){
        maxOccurance = currentItem;
        maxOccuranceIndex = i;
    }
}
console.log(minOccurance , minOccuranceIndex);
console.log(maxOccurance , maxOccuranceIndex);