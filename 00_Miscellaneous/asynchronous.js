/*
    JS is single-threaded (runs on a main thread).
    That's why we want to avoid blocking code.

    Asynchronous code is needen
    Over a network
    Buffers, Ex. Email (SMTP)
    Database
    CRON jobs (in Node)
    Filesystem (files, folders)
    User input (mouse, keyboard, event handlers)


    Asynchronous code:

    - Solution 1: Callbacks
        Cons: Callback hell, Pyramid of Doom
    
    - Solution 2: Promises
        States:
        - Pending
        - Fulfilled
            - Resolved
            - Rejected
        Cons: More chars, less readable, newsting lead to pyramid of doom

    - Solution 3: Async/Await (Use this from now on)
        Syntactic sugar for promises

    Callbacks:
    - A function that is passed to another function as a parameter.

    Promises:
    - An object that represents a future value.

    Async/Await: (Use this from now on)
    - Syntactic sugar for promises.

    
    
    */
   /*
new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            throw Error;
            resolve('Promise worked out.');
        } catch {
            reject("Promise didn't work out.");
        }
    }, 3000);
})
.then((succesMessage) => console.log(succesMessage))
.catch((errorMessage) => console.log(errorMessage));
*/

/* Task:
    Create a promisified function
    that is, a function that returs a promise
    it should be called myPromise
    and it should either resolve as "Something Good" or reject as "Something Bad"
    create a 2 second timeout to simulate asynchronous behavior
*/

function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw "Something Bad"
                resolve("Something Good");
            } catch (errorMessage) {
                reject(errorMessage)
            }
        }, 2000);
        
    });
    
}
myPromise()
.then((message) => console.log("Success Message:", message))
.catch((message) => console.log("Error Message:", message));


/* Task:
    Create a myFetch function that takes a certain amount of time
    it should return some response
    be creative
*/

function myFetch(URL, options={}) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ({
                json: () => new Promise ((resolve, reject) => resolve ({ data: "Response"}))
            });
        }, 2500);
    })
}

myFetch("URL")
.then(response => response.json())
.then(result => console.log(result));


//const response = await myFetch();
//const result = await response.json();

async function main() {
    const response = await myFetch();
    const result = await response.json();
    console.log(result);
}
//main();

// IIFE
(async function callMyPromise() {
    try {
        const result = await myPromise();
        console.log(result);
    } catch (error) {
        console.log(error);
        //Error(error);
    }
    
})();
//callMyPromise();



async function handleAllPromises() {
    const result = await Promise.all((myFetch, myPromise));
    console.log(result);
}
handleAllPromises();