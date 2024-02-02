let sorting = [23, 4, 53, 64, 34, 634, 54, 34, 74, 574, 6, 456, 4, 64];

// let sorted_asc = sorting.sort();
// console.log(sorted_asc);


// sort based on ascii value 
/* 
let persons = ['akib','nokib','pakib','rakib','mokib','Karim','Anis'];
let sortedPerson = persons.sort();
console.log(sortedPerson);
 */

let sorted_asc = sorting.sort(function(a,b){return a - b});
let sorted_dsc = sorting.sort(function(a,b){return b - a});
console.log(sorted_asc);
console.log(sorted_dsc);