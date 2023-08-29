//hoisting: can call a function that is written below
console.log(getRandomInt(10,5));
//console.log(getRandomIntAnonymousFunction(10,5));
//console.log(getRandomIntAnonymousFunctionWithoutReturn(10,5));

//standard function
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

//anonymous functions are never hoisted.

//anonymous function
const getRandomIntAnonymousFunction = function (min, max){
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

//hoisting does not apply to arrow functions.
//so you need to initialize before calling them.

//arrow function
const getRandomIntAnonymousFunctionWithoutReturn = (min, max) => 
     Math.floor(Math.random() * (max + 1 - min) + min);


function genericActionPerfomer(genericAction, name){
    //do things...
    return genericAction(name);
}

// desired result : Lasse is jumping

const jump = (name) => `${name} is jumping`;

console.log(genericActionPerfomer(jump, 'Lasse'));


//const run = (name) => `${name} is running`; 

/* function run (name, runAction) {
    runAction = " is running";
    return name + runAction;
}  */

function run (name){
    return `${name} is running`;
}

console.log(genericActionPerfomer(run, 'Jonathan'));


// Desired result is "Daniel is sleeping".
// Create a sleep callback and get the desired result.
// In a single statement!

//const sleep = (name) => `${name} is sleeping`;
//console.log(genericActionPerfomer(sleep, 'Daniel'));

console.log(genericActionPerfomer((name) => `${name} is sleeping`, 'Daniel'));
