//5 primitive Datatypes
//4
//9.3
//-10

//Strings
//"Hello World"
//"43"

//Booleans
//true
//false

//null and undefined
//null
//Undefined

let string = ["hello world", "second index"];
let newString = []


for(let i = 0; i < string.length; i++){
   newString.push(string[i])
}
newString.push('You are cool', 5,78)

console.log(newString)
console.log(string)


//variable is a container that has a name on it.
//They follow this patterns
let yourValue = "hello";
let yourVariableName = yourValue;
console.log(yourVariableName)
// They can store all of the values we've seen
let name = "Rusty";
let secretNumber = 73;
let isAdorable = true;

//Recal the stored values by calling the variable name

let namess = "Rusty";
"Hello there " + namess //"Hello there Rusty"

let num = 37;
num + 3 + 10 //50

//we can also update exsiting variables
let names = "Robert";
names = "Bob";
console.log(names)



let firstName = prompt("What is your first Name? ");
let lastName = prompt("What is your last name? ");
let userAge = prompt("How old are you? ");
let fullName = firstName + " " + lastName;
alert("Hello " + fullName);
alert("You are " + userAge + " years old.");