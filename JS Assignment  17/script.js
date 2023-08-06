// Practice 13.1
// // 1. Create a function named greet() that takes one argument, fullName. Output the items of the array into the console interpolated into a greeting message string.
// function greet(fullName) {
//     console.log(`Hello, ${fullName[0]} ${fullName[1]}!`);
//   }
  
//   // 2. Create a second function that has two arguments: the first one is a string for the user's full name, and the second is the callback function.
//   function fullNameCallback(fullName, callback) {
//     // 3. Split the string into an array using the split() method.
//     const fullNameArray = fullName.split(' ');
    
//     // 4. Send the full-name array to the greet() function created in the first step.
//     callback(fullNameArray);
//   }
  
//   // 5. Invoke the process of the callback function
//   const userFullName = 'John Doe';
//   fullNameCallback(userFullName, greet); // Output: Hello, John Doe!




// Practice 13.2  
  // 1. Set up a Promise that resolves with a value of "Start Counting".
// const startCountingPromise = new Promise((resolve) => {
//     resolve("Start Counting");
//   });
  
//   // 2. Create a function named counter() that has one argument that gets the value and outputs it into the console.
//   function counter(value) {
//     console.log(value);
//   }
  
//   // 3. Set up the next function in the Promise with four then() instances, which should output a value into the counter function, and return a value which will provide input for the subsequent then() instance.
//   startCountingPromise
//     .then((value) => {
//       counter(value);
//       return "One";
//     })
//     .then((value) => {
//       counter(value);
//       return "Two";
//     })
//     .then((value) => {
//       counter(value);
//       return "Three";
//     })
//     .then((value) => {
//       counter(value);
//     });
  
  // Output in the console should be:
  // Start Counting
  // One
  // Two
  // Three



//   Practice 13.3
  // 1. Create a global value for a counter.
// let globalCounter = 0;

// // 2. Create a function that takes one argument. Return the result of a new Promise, setting a setTimeout() function that will contain the resolve instance.
// function timeout(value) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       // 3. Increment the counter within setTimeout(), adding one every second.
//       globalCounter++;
//       // 4. Resolve the Promise with the value of the counter and the value of the variable that was in the function argument.
//       resolve({ counter: globalCounter, value });
//     }, 1000);
//   });
// }

// // 5. Create an asynchronous function that outputs into the console the value of the global counter and the value of the argument of the function.
// async function asyncFunction() {
//   const result = await timeout("ready");
//   console.log(result.value, "counter:" + result.counter);
// }

// // 6. Create a loop to iterate 10 times, incrementing the value and invoking the async function, passing the value of the increment variable as the parameter in the function.
// for (let i = 1; i <= 10; i++) {
//   asyncFunction();
// }





// Password Checker
// 1. Create an array of allowed passwords.
// const allowedPasswords = ["password123", "letmein", "securepassword"];

// // 2. Create a login function that will check if the argument is a value that is included in the passwords array.
// function login(password) {
//   return allowedPasswords.includes(password);
// }

// // 3. Add a function that returns a Promise. Using resolve and reject, return a JavaScript object with the Boolean of true or false to indicate the password validity status.
// function passwordChecker(password) {
//   return new Promise((resolve, reject) => {
//     if (login(password)) {
//       resolve({ isValid: true });
//     } else {
//       reject({ isValid: false });
//     }
//   });
// }

// // 4. Create a function that checks the password, sending it to the login function, and using then() and catch(), outputs the result of either the rejected password or the resolved password.
// function checkPassword(password) {
//   passwordChecker(password)
//     .then((result) => {
//       console.log("Password is valid:", result.isValid);
//     })
//     .catch((error) => {
//       console.log("Password is invalid:", error.isValid);
//     });
// }

// // 5. Send several passwords, some within the array, others not, to the checker function.
// checkPassword("letmein"); // Output: Password is valid: true
// checkPassword("wrongpassword"); // Output: Password is invalid: false
// checkPassword("securepassword"); // Output: Password is valid: true
