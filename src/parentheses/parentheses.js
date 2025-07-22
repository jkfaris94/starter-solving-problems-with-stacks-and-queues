const Stack = require("../lib/stack");

const match = (expression) => {
  // use a plain array as our stack
  const stack = [];

  for (let char of expression) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      // if there's no matching "(" waiting, it's invalid
      if (stack.length === 0) return false;
      stack.pop();
    }
    // all other characters are ignored
  }

  // valid only if we've matched every "("
  return stack.length === 0;
};



module.exports = match;
