const colleges = ['DPI', 'DU', 'DC', 'DCC'];

//reverse method
// colleges.reverse();
// console.log(colleges);


//for of loop
// let reversed = [];
// for(const college of colleges){
//     reversed.unshift(college);
// }
// console.log(reversed);


// for loop 
// let reverse = [];
// for (let i = 0; i < colleges.length; i++) {
//     reverse.unshift(colleges[i]);
// }
// console.log(reverse);


// for loop different condition 
let reversed = [];
for(let i = colleges.length - 1; i >= 0 ; i--){
    reversed.push(colleges[i]);
}
console.log(reversed);