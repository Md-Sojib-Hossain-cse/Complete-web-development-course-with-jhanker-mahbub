// 10% discount on above 300 tk purchases
const purchaseHistory = [230, 322, 344, 235, 632, 321, 822];

const discountedPurchase = [];

for (let i = 0 ; i < purchaseHistory.length; i++){
    const currentItem = purchaseHistory[i];
    if(currentItem > 300){
        const discountItem = currentItem - currentItem * 10 / 100;
        discountedPurchase.push(discountItem);
    }
    else{
        discountedPurchase.push(currentItem);
    }
}
console.log(discountedPurchase);