
// 1.1

function checkEquality(a, b) {
    if (a == b) {
      return "equals";
    } else {
      return "not equals";
    }
  }

console.log(checkEquality(5, "5")); // returns "equals"
console.log(checkEquality(10, 20)); // returns "not equals"
console.log(checkEquality("hello", "hello")); // returns "equals"


// 1.2

function fahrenheitToCelsius(fahrenheit) {
    if (isNaN(fahrenheit)) {
      return false;
    } else {
      const celsius = (fahrenheit - 32) * 5/9;
      return celsius;
    }
  }

  
console.log(fahrenheitToCelsius(32)); // returns 0
console.log(fahrenheitToCelsius(68)); // returns 20
console.log(fahrenheitToCelsius("not a number")); // returns false

// 1.3


function performOperation(a, b, operation) {
    if (isNaN(a) || isNaN(b) || typeof operation !== "string") {
      return false;
    } else {
      switch (operation) {
        case "+":
          return a + b;
        case "-":
          return a - b;
        case "*":
          return a * b;
        case "/":
          return a / b;
        default:
          return false;
      }
    }
  }

  
console.log(performOperation(5, 3, "+")); // returns 8
console.log(performOperation(5, 3, "-")); // returns 2
console.log(performOperation(5, 3, "*")); // returns 15
console.log(performOperation(5, 3, "/")); // returns 1.6666666666666667
console.log(performOperation("not a number", 3, "+")); // returns false
console.log(performOperation(5, "not a number", "+")); // returns false
console.log(performOperation(5, 3, "%")); // returns false
