//slice method slices values from an array and create a new array do not change existing array
//start from first index value , but ends up to / previous of last index value

//syntax : arrayName.slice(starting index , up to index)

const fruits = [ 'apple', 'orange', 'grapes', 'mango', 'banana', 'jackfruit' ];

const newFruits = fruits.slice(2, 5);

console.log(newFruits);