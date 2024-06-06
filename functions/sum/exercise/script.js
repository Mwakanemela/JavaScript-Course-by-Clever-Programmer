/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

function add(a, b) {
  //Add function here
  return a + b
}
const addArrow = (a, b) => a + b

function sub(a, b) {
  //Subtract function here
  return a - b
}
const subArrow = (a, b) => a - b

function div(a, b) {
  //Divide function here
  if (a == 0) {
    return "Can't divide by zero"
  } else {
    return a / b
  }
}

const divArrow = (a, b) => {
  if (a == 0) {
    return "Can't divide by zero"
  } else {
    return a / b
  }
}
function mul(a, b) {
  //Multiply function here
  return a * b
}
const mulArrow = (a, b) => a * b
console.log('hello from the SUM exercise')
console.log(SVGNumber(10, 10))
/*
  TODO: create a function that console logs the result of any of the above operations.
*/