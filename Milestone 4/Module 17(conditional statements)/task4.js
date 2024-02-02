const myMarks = 79;
const friendMarks = 60;

if(myMarks >= 80){
    if(friendMarks >= 80){
        console.log("Lets go for a lunch");
    }
    else if(friendMarks < 80 && friendMarks >= 60){
        console.log("Good luck next time");
    }
    else if(friendMarks < 60 && friendMarks >= 40){
        console.log("Keep his message unseen");
    }
    else{
        console.log("Block him");
    }
}
else{
    console.log("Go to home and sleep and act sad.");
}