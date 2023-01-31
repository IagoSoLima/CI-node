const sum = require("./sum");
const subtract = require("./subtract");
const multiplication = require("./multiplication");
const division = require("./division");
const squareRoot = require("./square_root");
const absolute = require("./absolute");
const pow = require("./pow");

function app() {
  const n1 = 4;
  const n2 = 5;

  console.log(`numbers: ${n1} e ${n2}`);
  //
  console.log("sum: ", sum(n1, n2));
  console.log("subtract: ", subtract(n1, n2));
  console.log("multiplication: ", multiplication(n1, n2));
  console.log("division: ", division(n1, n2));
  console.log("absolute: ", absolute(-n1), absolute(-n2));
}

module.exports = app;

app();
