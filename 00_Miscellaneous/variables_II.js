//"use strict";
// using strict prevents certain things.

//totalGlobalVariable = "Never EVER!!! do this!!!";
var globalVariable = "Also Never!!! do this!!!";

//console.log(globalVariable);


//const isThisConstant = 123; 

//const needs to be initialized.
// can't do this: 
//const istthisConstant;

// const value can't be redeclared.
//isThisConstant = 456; 

const isThisConstant = []
isThisConstant.push(1,2,3);
console.log(isThisConstant);

const anotherConstant = {};
anotherConstant.valueChange = true;
console.log(anotherConstant);



//global scope

function anotherScope(){
    //function scope
}

{
    //block scope
}

{
    console.log("Hello I am in a block scope.")
}

{
    let someVariable = true;
    {
        let someVariable = false;
    }
    //console.log(someVariable);
    // if var, it is 'false', if let it is 'true'.
}

/* for (var i = 0; i <= 5; i++){
    setTimeout(() => {
        console.log(i);
    }, 1000);
} */
// when var (global variable) is changed to let, then it can go up to 6 from 0.
 for (let i = 0; i <= 5; i++){
    setTimeout(() => {
        console.log(i);
    }, 1000);
} 
