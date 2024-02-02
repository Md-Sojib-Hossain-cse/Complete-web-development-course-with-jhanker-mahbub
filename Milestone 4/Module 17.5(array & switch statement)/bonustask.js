function getSeason(month) {
    switch (parseInt(month)) {
        case 3:
        case 4:
        case 5:
            console.log(`Running season is Spring`);
            break;
        case 6:
        case 7:
        case 8:
            console.log(`Running season is Summer`);
            break;
        case 9:
        case 10:
        case 11:
            console.log(`Running season is Autumn`);
            break;
        case 1:
        case 2:
        case 12:
            console.log(`Running season is Winter`);
            break;
        default:
            console.log(`Input is invalid : Month must be in 1 to 12.`);
            break;
    }
}
getSeason(5);