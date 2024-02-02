//Swapping elements of an array

let arr = [10, 20, 30 , 40,50];

let swapstore;

swapstore = arr[1];
console.log(swapstore);
arr[1] = arr[3];
arr[3] = swapstore;

console.log(arr);