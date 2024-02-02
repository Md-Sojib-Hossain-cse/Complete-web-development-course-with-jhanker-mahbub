const myLove = {
    height: 50,
    weight: 45,
    color: "normal",
    hair: "long",
    isReligeous: true,
    extraSkills: ['quran', 'cooking'],
    myFacilities: {
        foods: 'fuchka',
        travels: ["sylhet", "shajek", "kashmir"],
        isSupportive: true,
    }
}


// For in loop

// for (const prop in myLove){
//     console.log(prop ,' : ', myLove[prop]);
// ;}


const keys = Object.keys(myLove);
console.log(keys);

for (const key of keys) {
    console.log(key, " : ", myLove[key]);
}