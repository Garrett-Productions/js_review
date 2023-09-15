var count = 5;
var message = "Hello World";
var likesJS = true; // lower case for booleans

var count = 5;
count = "I'm now a string!"; // you can change variables in JS but it's not normal, but you can

var product = 2.345 + 2.879;
console.log(product);

//combining strings

var name = "Marisa";
var message = "JS is actually the trickiest language";
console.log(name + " says " + message);


//combining data types 
var name = "Phil";
var luckyNumber = 8;
console.log(name + "'s lucky number is " + luckyNumber);

function counter() {
    for(var num = 0; num <= 5; num++){
        console.log(num)
    }
}
counter();

//adding parameters
function counter(startNum){
    for (var num = startNum; num >= 0; num--){
        console.log(num);
    }
}
counter(4) //we are passing in the ARGUEMENT HERE. Our placeholder in the begin needs defined in ther function call

function createArray(num) {        
    var newArray = [];       
    for (var i = 0; i <= num; i++) {                
        newArray.push(i);
        console.log(newArray)        
    }
}
createArray(5);
//The newArray only exists inside of the function.  Out here it no longer exists! Because we need to return it

function createArray(num) {        
    var newArray = [];        
    for (var i = 0; i <= num; i++) {                
        newArray.push(i);        
    }        
    return newArray;        // added the return statement
}
var y = createArray(5);        // now y is the variable that is calling on createArray
//  Remember, the value of a function call is whatever it returns. In this case, since y called on createArray with the value 5, 
// the value that createArray returns (in our case, the array [0,1,2,3,4,5]) is then assigned to the variable y.


function displayName(elementname){
    console.log(elementname)
}

//Alert in JS is built in
//<button onclick="alert('hello')">Click Me!</button> //our hTML attached doc is a good example of a VAR we made of this
//------------------------------------------------------------//

// Working with "This" and "Element" Check HTML lines 19-21 for corresponding code
function example(element) {
    console.log("element clicked", element);
}

//;ine 22-24 in HTML we are using innertext thats built in to change the word
function turnOff(element) {
    element.innerText = "Off";
}
function changeEm(element) {
    element.innerText = "Lame";
}
//we used "This" and "Element" to change the 'innerText' it's used for MANIPULATION of HTML

function hide(element) {
    element.remove();
}

function addShadow(element){
    element.classList.add("shadow");
}

function removeShadow(element){
    element.classList.remove("shadow"); //shadow is the name of the css class we created to represent the HTML element 
}                                       // we need to use quotes in our hTML to find our CSS class