/*
    JS is a single-threaded (runs on a main thread).
    That's why we want to avoid blocking code.

    Asynchronous code is needed
    Over a network
    Buffers, Ex. Email (SMPT)
    Database
    CRON jobs (in Node)
    File system (files, folders)
    User Input (mouse, keyboard, event handlers)

    Asynch code:

    Solution 1: Callback
    Cons: Callback hell

    Solution 2: Promises (syntactic sugar for callbacks)
    States:
        - Pending
        - Fulfilled
            - Resolved
            - Rejected
    Cons: More chars, less readable, nesting leads to pyramid of doom

    Solution 3: Asynch/Await
    Syntactic sugar
*/

/* new Promise((resolve, reject) => {
    setTimeout( () => {
        try {
            //throw Error;
            resolve("Promise worked"); //success message
        } catch {
            reject("Promise didn't work out."); //error message
        }
    }, 3000);
})
.then((successMessage) => console.log(successMessage))
.catch((errorMessage) => console.log(errorMessage)); */

/* Task: create a promissified function that is, a function that returns a promise
it should be called MyPromise and it should either resolve as "Something Good" or reject
"Something Bad" creata a 2 sec. timeout to simulate asynch behaviour. */

function myPromise() {
        return new Promise((resolve, reject) => {
        setTimeout( () => {
            try {
                throw "Something bad"
                resolve("Something good");
            } catch (errorMessage) {
                reject(errorMessage);
            }
        }, 2000);
    })
}

myPromise()
.then((message) => console.log("Success:", message))
.catch((message) => console.log("Error:", message));


/* task
    create a myFetch function that takes a certain amount of time
    it should return some response
    be creative
*/

function myFetch(URL, options={}) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                json: () => new Promise((resolve, reject) => resolve({ data: "Response" }))
            });
        }, 2500);
    })
}

// myFetch("URL")
// .then(response = response.json())
// .then(result => console.log(result));

// const response = await myFetch();
// const result = await response.json();

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
    }
})();

//callMyPromise();

async function handleAllPromises(){
    const results = Promise.all([myFetch, myPromise]) //gather promises together before another promise is executed.
    console.log(results);
}

handleAllPromises();
