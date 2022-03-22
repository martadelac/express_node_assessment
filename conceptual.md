### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
      Using callbacks: Callbacks allow you to provide a function to be executed after the asynchronous 
      code has finished with help of setTimeOut functions.
      The second way is using promises, with the methods .then and .catch it helps handling errors.
      The third way is the most recent, the use of the keeywords "async" and "await" heelp keeeping cleaner the promises as well as gives more control over the function execution order. You can also handle errors usint try/catch.


- What is a Promise?
      A promise is an object that may produce a single valuee some time in the future: it can eithr return a value, or a reason why its wasn't resolved. A promise may be in one of 3 possible states: fulfilled, pending or rejected. You can also attach callbacks to handle the fulfilled value or the reason for rejection.



- What are the differences between an async function and a regular function?

      A regular function is executed right after its called, while an async function must wait for some time or conditions to be executed.

- What is the difference between Node.js and Express.js?
      Node is a run-time environment for building server-side event-driven applications using javascript while Express is a framework based on Node wich is used for building web-applications using principles and approaches of Node.

- What is the error-first callback pattern?
I think it consinsts on executing a function when the asynchronous operation ends, and it takes a first argument a error, if onee occurs, and dthen the result of the request as extra arguments.


- What is middleware?
      It is code that runs in the middle of the request or response cycle


- What does the `next` function do?
      Next is a function in the Express router which, when invoked, executes the middleware succeeding the curreent middlewaree. 

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
