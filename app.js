//==========Simple function==========//
function myFunction(){
    let x = 10;
    let y = 10;
    let total = x + y;
    console.log("I'm simple function value:" + total);
}
myFunction();

//==========Parameterized function==========//
function newFunction (first, second){
    let x = first;
    let y = second;
    let total = x + y;
    console.log("I'm parameterized function value:" + total);
}
newFunction(2, 2);

//==========Rest Parameters Functions==========//
// function 