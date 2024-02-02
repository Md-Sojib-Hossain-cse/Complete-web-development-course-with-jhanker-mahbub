//string syntax :
//keyword name = "Value";

//different ways to write string
const country = "Bangladesh";                   //Typeof string
const district = 'Cumilla';                     //Typeof string
const thana = `Laksham`;                        //Typeof string
const po = new String ('Mudaforgonj');          //Typeof Object


console.log(po);                                //Output : [String: 'Mudaforgonj']


var str = "sojib hossain";
//string length (also take space and other punchuation or special charecters)
console.log(str.length);
//given index value
console.log(str[4]);

//strings are immmutable (we cannot directly modify individual charecter after they created once);
str[4] = 't';
console.log(str);