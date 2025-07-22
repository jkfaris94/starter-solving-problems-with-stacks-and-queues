const Stack = require("../lib/stack");

const isPalindrome = (sentence) => {
  // Step 1: Normalize the sentence
  sentence = sentence.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Step 2: Find the middle index
  const middle = Math.floor(sentence.length / 2);

  // Step 3: Initialize a stack
  const stack = [];

  // Step 4: Push the first half onto the stack
  for (let i = 0; i < middle; i++) {
    stack.push(sentence[i]);
  }

  // Step 5: Determine where to start comparing for the second half
  let start = sentence.length % 2 === 0 ? middle : middle + 1;

  // Step 6: Compare the second half to the stack
  for (let i = start; i < sentence.length; i++) {
    if (sentence[i] !== stack.pop()) {
      return false;
    }
  }

  // Step 7: If all characters matched
  return true;
};

module.exports = isPalindrome;
