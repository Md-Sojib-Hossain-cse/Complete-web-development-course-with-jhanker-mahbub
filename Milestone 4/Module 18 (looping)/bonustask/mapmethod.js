const purchaseHistory = [230, 322, 344, 235, 632, 321, 822];

const discountedPurchase = purchaseHistory.map(function(currentItem){
    if(currentItem > 200){
        const discountItem = currentItem - currentItem * 10/100;
        return discountItem;
    }
    else{
        return currentItem;
    }
})
console.log(discountedPurchase);