"use strict";

// totalGlobalVariable = "Never EVER!!! do this!!!";
var globalVariable = "Also Never!!! do this"

// cant do this
//const isThisConstant;

//cant do this
//const isThisConstant;
//isThisConstant = 456;

/*
var test;
var test;
let test2;
let test2;
*/

const isThisConstant = [];
isThisConstant.push(1,2,3);
console.log(isThisConstant);

const anotherConstant = {};
anotherConstant.valueChange = true;
console.log(anotherConstant);


// global scope

function anotherScope() {
    // function scope
}

{
    // block scope
}

{ 
    console.log("Hello I am in a block scope")
}

/*
{
    var someVariable = true;
    {
        var someVariable = false;
    }
    
    console.log(someVariable);
}
*/

{
    let someVariable = true;
    {
        let someVariable = false;
    }
    console.log(someVariable);
}
/*
for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
*/
for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
