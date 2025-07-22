const Stack = require("../lib/stack");

const postfix = (expression) => {
  const stack = [];
  const result = [];
  const precedence = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 };

  for (let char of expression.replace(/\s+/g, '')) {
    if (/[A-Za-z0-9]/.test(char)) {
      result.push(char);
    } else if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        result.push(stack.pop());
      }
      stack.pop();
    } else if (char in precedence) {
      while (
        stack.length &&
        stack[stack.length - 1] !== '(' &&
        precedence[stack[stack.length - 1]] >= precedence[char]
      ) {
        result.push(stack.pop());
      }
      stack.push(char);
    }
  }

  while (stack.length) {
    result.push(stack.pop());
  }

  // <-- change here: insert spaces between tokens
  return result.join(' ');
};

module.exports = postfix;
