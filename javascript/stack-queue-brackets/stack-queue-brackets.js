'use strict';

function validateBrackets(string) {
  let stack = [];
  for (let i = 0; i < string.length; i++) {
    let e = string[i];
    if (e === '(' || e === '[' || e === '{') {
      stack.push(e);
      continue;
    }
    if (stack.length === 0) {
      return false;
    }
    let check;
    switch (e) {
    case ')':
      check = stack.pop();
      if (check !== '(') {
        return false;
      }
      break;
    case ']':
      check = stack.pop();
      if (check !== '[') {
        return false;
      }
      break;
    case '}':
      check = stack.pop();
      if (check !== '{') {
        return false;
      }
      break;
    }
  }
  return stack.length === 0;
}

module.exports = validateBrackets;
