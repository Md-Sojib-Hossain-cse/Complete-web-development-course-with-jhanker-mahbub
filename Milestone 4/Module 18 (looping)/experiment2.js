let employeePosition = ['junior','senior','intern','manager'];
let promotedEmployee ;

for (promotedEmployee of employeePosition){
    if(promotedEmployee === 'senior'){
        console.log(promotedEmployee , "'s won't get promotion this month");
        continue;
    }
    console.log(promotedEmployee , "'s will get promotion this month");
}