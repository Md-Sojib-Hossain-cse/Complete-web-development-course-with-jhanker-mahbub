//splice method added and/or remove values of an array from any index number we provide
//it changes original array 

//syntax : arrayName.splice(indexValue , howManyRemove , addingValue1 , addingValue2)

const fruits = [ 'apple', 'orange', 'grapes', 'mango', 'banana', 'jackfruit' ];

fruits.splice(4 , 1 , 'lemon', 'termaric');
console.log(fruits);