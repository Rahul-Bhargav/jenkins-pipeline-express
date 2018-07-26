function add(a, b) {
  console.log('hello');
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = {
  add: add,
  divide: divide,
  multiply: multiply,
  subtract: subtract
};
