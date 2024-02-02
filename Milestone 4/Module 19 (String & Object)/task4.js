// ### Task-4

// Count the `number of properties`.


let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

/* 
const studentSize = Object.keys(student);
console.log(studentSize.length);
 */

/* 
let studentSize = [];
for(const prop in student){
    studentSize.push(prop);
}
console.log(studentSize.length);
 */



/* 
let studentSize = 0;
const studentArray = Object.keys(student);
for(let i = 0 ; i < studentArray.length ; i++){
    studentSize += 1;
}
console.log(studentSize);
 */