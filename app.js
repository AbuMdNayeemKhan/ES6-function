//==========Simple function==========//
function myFunction(){
    let x = 10;
    let y = 10;
    let total = x + y;
    // console.log("I'm simple function value:" + total);
}
myFunction();

//==========Parameterized function==========//
function newFunction (first, second){
    let x = first;
    let y = second;
    let total = x + y;
    // console.log("I'm parameterized function value:" + total);
}
newFunction(2, 2);

//==========Rest Parameters Functions==========//
// Rest parameter can resive multiple value by using array
function restFunction(...value){
    let data = value;
    // console.log(data[6]);
}

restFunction( 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "c");

//==========Function Returning type==========//
//function can return anything. 
function functionOne(){
    return 22; //return can return number
}
function functionTwo(){
    return 22;
}
function bothFunction(){
    return functionOne() + functionTwo(); //return can return function
}
// console.log(bothFunction());

//==========Anonymous functions==========//
//A function without a name
//It can be declared dynamically at runtime
//An anonymous function can be assigned within a variable.
// Anonymous functions can reassign
let myFun = function(){
    return "hello anonymouse";
}
// console.log(myFun());
let myFunTwo = function(val1, val2){ //Anonymus function can reasive parameters 
    return val1 + val2;
}
// console.log(myFunTwo(3, 3));
let myFunThree = function(...vals){ //Anonymus function can resive rest parameters
    return vals;
}
// console.log(myFunThree(1, 2, 3, 4, 5));

//==========Arrow Function==========//