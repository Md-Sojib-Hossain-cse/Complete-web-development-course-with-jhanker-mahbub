const fruits = ['apple','orange','banana','coconut'];

const target = "mango";
let foundIndex = -1;

for (let i = 0 ; i < fruits.length ; i++){
    const currentFruit = fruits[i];
    if(currentFruit == target){
        foundIndex = i;
    }
}

if(foundIndex > -1){
    console.log("Index " , foundIndex , "founded");
}
else{
    console.log("Not founded");
}