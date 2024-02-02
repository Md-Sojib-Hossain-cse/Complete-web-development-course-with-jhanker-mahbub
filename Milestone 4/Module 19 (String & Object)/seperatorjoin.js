//split(seperator) 

const place = "Andar killa bandar ban";

console.log(place.split("a"));

const friends = "rahim,karim,lathim,mathim,nahim"

const friendsArray = friends.split(",");
console.log(friendsArray);

// const friendsString = friendsArray.join("|");
const friendsString = friendsArray.join();
console.log(friendsString);
console.log(typeof friendsString);