const colleges = ['DPI', 'DU', 'DC', 'DCC'];

//for of loop
for (const college of colleges) {
    console.log(college);
}


//for loop 
for (let i = 0; i < colleges.length; i++) {
    console.log(colleges[i]);
}


//while loop
let i = 0;
while (i < colleges.length) {
    console.log(colleges[i]);
    i++;
}