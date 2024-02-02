//object delacration
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

//Dot notation
console.log(myLove.isReligeous);

let supportive = myLove.myFacilities.isSupportive;
console.log(supportive);


//Sqare Bracket notation
console.log(myLove['hair']);

let skills = myLove['extraSkills'];
console.log(skills);