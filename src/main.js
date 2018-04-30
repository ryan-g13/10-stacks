'use strict';

// const server = require('./lib/server');
// const logger = require('./lib/logger');

// server.start(process.env.PORT, () => logger.log(logger.INFO, `MAIN: listening on ${process.env.PORT}`));

const Stack = require('./lib/stack');

const stack = new Stack();
// console.log(stack);
console.log(stack.isEmpty(), 'empty check');
stack.push(1);
stack.push(2);
stack.push('a');
console.log(stack, 'After pushes');
stack.pop();
console.log(stack, "After first pop");
console.log(stack._storage.head.next, 'verify pop ');
console.log(stack._storage.head.next.next, 'verify pop worked');
console.log(stack.isEmpty(),'Expected value of false');
// console.log(stack);
// console.log(stack);
//method calls to fill the stack and then pop from the stack.