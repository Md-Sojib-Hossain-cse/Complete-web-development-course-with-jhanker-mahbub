// ### Task-5 (Hard)
// Loop through an object and print the key-value pairs with their `types`

// **Output:**
//     key: name | type:  string
//     key: age | type:  number
//     key: city | type:  string
//     key: isStudent | type:  boolean


let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};


for (let objects in myObject) {
    const keys = objects;
    const keyType = myObject[objects];
    console.log("key : ", keys, " | ", "type : ", typeof (keyType));
}