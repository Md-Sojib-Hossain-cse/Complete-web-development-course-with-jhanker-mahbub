const lightCondition = false;

switch(lightCondition){
    case true:
        console.log("Light On");
        break;
    case false:
        console.log("Light off");
        break;
    default:
        console.log("input is invalid");
        break;
}



switch(true){
    case lightCondition:
        console.log("light on");
        break;
    default:
        console.log("light off");
        break;
}