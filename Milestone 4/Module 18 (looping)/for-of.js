//array is an iterable object , because with the help of this iterates can execute  values sequencely one after one 
const students = ['sojib','sonia','sumaiya','rifat','mobarak','mosharraf'];

// it is an for of loop student is an variable which will contain iterable items when the loop will execute , in every iteration it will contain next value of the iterable items secuentially . in this scenario the iterable item is students array , so it will execute 'sojib' first then goes to 'sonia' then 'sumaiya' and it will start from first and return after the array items end . 
for(const student of students){
    // in every iteration this student variable will console.log its value . (in every iteration its value will change secuentially one after one element depending on iterable item.)
    console.log(student);
}




const items = ['pant','shirt','shoe','back cover for mobile','headphone'];

for(const item of items){
    console.log(item);
}