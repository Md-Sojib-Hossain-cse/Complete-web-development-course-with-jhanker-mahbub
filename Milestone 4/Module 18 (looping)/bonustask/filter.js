//filtering array items.


//Using loop
// const purchaseHistory = [230, 322, 344, 235, 632, 321, 822];
// let filteredPurchase = [];

// for(let i = 0 ; i < purchaseHistory.length ; i++){
//     const currentItem = purchaseHistory[i];
//     if(currentItem <= 300){
//         filteredPurchase.push(currentItem);
//     }
// }
// console.log(filteredPurchase);


// using filter method
const purchaseHistory = [83 , 34, 63, 345, 72, 246 , 137, 43, 732];

const filterPurchase = purchaseHistory.filter(
    function(currentItem){
        return currentItem >= 100;
    }
)
console.log(filterPurchase);