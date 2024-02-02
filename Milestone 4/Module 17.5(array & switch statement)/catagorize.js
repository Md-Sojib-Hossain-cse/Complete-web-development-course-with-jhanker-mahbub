function catagorizeFruit(name){
    switch(name.toLowerCase()){
        case 'banana':
        case 'mango':
        case 'jackfruit':
            console.log(`${name} are deshi fruit`);
            break;
        case 'apple':
        case 'orange':
            console.log(`${name} are bideshi fruit`);
            break;
        default:
            console.log(`${name} are not recognized`);
            break;
    }
}
catagorizeFruit('mango');
catagorizeFruit('orange');
catagorizeFruit('komola');
