const myLove = {
    height : 50,
    weight : 45,
    color : "normal",
    hair : "long",
    isReligeous :true,
    extraSkills : ['quran','cooking'],
    myFacilities : {
        foods : 'fuchka',
        travels : ["sylhet","shajek","kashmir"],
        isSupportive : true,
    }
}

//console.log nested object array value
// console.log(myLove.myFacilities.travels[2]);


//updating nested object array value
myLove.myFacilities.travels[0] = "Rangamati";
console.log(myLove);

//deleting an key/property of an object
delete myLove.height
console.log(myLove);