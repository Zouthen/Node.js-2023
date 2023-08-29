// hoisting is the process of moving function declarations to the top of the file
//console.log(getRandomint());

function getRandomint(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

const getRandomIntAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
};

const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
};

const getRandomIntArrowFunctionWithoutReturn = (min, max) => 
    Math.floor(Math.random() * (max + 1 - min)) + min;


function genericActionperformer(genericAction, name) {
   // do things... 
    return genericAction(name);
}

const jump = (name) => `${name} is jumping`;
// Desired result: Lasse is jumping
console.log(genericActionperformer(jump, 'Lasse'));

// define run in a different way that on line 25
// Desired result "Jonathan is running"
function run(name) {
    return `${name} is running`;
}
console.log(genericActionperformer(run,"Jonathan"))

// Desired result is "Daniel is sleeping"
// Create a sleep callback and get the desired result in a single statement

console.log(genericActionperformer((name) => `${name} is sleeping`, "Daniel"));