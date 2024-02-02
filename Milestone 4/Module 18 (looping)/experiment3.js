let password = "Ariful25500";
let pass;
let convertedPass = "";
let newPass = "";
for (pass of password) {
    if (pass == '0') {
        console.log("ax");
        convertedPass = "ax";
        newPass = newPass + convertedPass;
        continue;
    }
    else if (pass == '1') {
        console.log("bt");
        convertedPass = "bt";
        newPass = newPass + convertedPass;
        continue;
    }
    else if (pass == '2') {
        console.log("cn");
        convertedPass = "cn";
        newPass = newPass + convertedPass; 
        continue;
    }
    else if (pass == '3') {
        console.log("df");
        convertedPass ="df";
        newPass = newPass + convertedPass; 
        continue;
    }
    else if (pass == '4') {
        console.log("et");
        convertedPass = "et";
        newPass = newPass + convertedPass; 
        continue;
    }
    else if (pass == '5') {
        console.log("fl");
        convertedPass = "fl";
        newPass = newPass + convertedPass; 
        continue;
    }
    else if (pass == '6') {
        console.log("gz");
        convertedPass ="gz";
        newPass = newPass + convertedPass; 
        continue;
    }
    else if (pass == '7') {
        console.log("hk");
        convertedPass ="hk";
        newPass = newPass + convertedPass; 
        continue;
    }
    else if (pass == '8') {
        console.log("ix");
        convertedPass = "ix";
        newPass = newPass + convertedPass; 
        continue;
    }
    else if (pass == '9') {
        console.log("jz");
        convertedPass ="jz";
        newPass = newPass + convertedPass; 
        continue;
    }
    console.log(pass);
    convertedPass = pass;
    newPass = newPass + convertedPass;
}
console.log(newPass);