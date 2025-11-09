const { NotImplementedError } = require('../lib/errors');

/**
 * Implement the Stack with a given interface via array.
 */
class Stack {
  constructor() {
    this._arr = [];
  }

  push(value) {
    this._arr.push(value);
  }

  pop() {
    return this._arr.pop();
  }

  peek() {
    return this._arr[this._arr.length - 1];
  }
}

module.exports = {
  Stack,
};
