const firstArray = [];
const secondArray = [];
let operator;
let newOperator;
let operationSymbolSet = false;
let firstTerm;
let secondTerm;
let result;
let resultSqrt;
let finalResult;

const decimals = (value) => {
  if (value % 1 !== 0) {
    firstArray.push(value.toFixed(3));
  } else {
    firstArray.push(value);
  }
};

const checkOperator = (operator) => {
  firstTerm = +firstArray.join("");
  secondTerm = +secondArray.join("");

  switch (operator) {
    case "+":
      result = firstTerm + secondTerm;
      break;
    case "-":
      result = firstTerm - secondTerm;
      break;
    case "*":
      result = firstTerm * secondTerm;
      break;
    case "/":
      result = firstTerm / secondTerm;
      break;
    case "sqrt":
      if (secondArray.length === 0) {
        resultSqrt = Math.sqrt(firstTerm);
      } else {
        resultSqrt = Math.sqrt(result);
      }
      break;
  }

  firstArray.length = 0;
  secondArray.length = 0;

  if (
    operator === "+" ||
    operator === "-" ||
    operator === "*" ||
    operator === "/"
  ) {
    decimals(result);
  } else {
    decimals(resultSqrt);
  }
  document.getElementById("screen").innerText = firstArray;
};

const container = document.getElementById("principalBox");
const buttonNodeList = container.querySelectorAll("div > button");

buttonNodeList.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (true) {
      case button.getAttribute("id") === "number":
        if (!operationSymbolSet) {
          if (firstArray.length <= 10) {
            firstArray.push(button.innerText);
            document.getElementById("screen").innerText = +firstArray.join("");
          }
        } else if (secondArray.length <= 10) {
          secondArray.push(button.innerText);
          document.getElementById("screen").innerText = +secondArray.join("");
        }
        break;
      case button.getAttribute("id") === "symbol":
        if (secondArray.length === 0) {
          operator = button.innerText;
          document.getElementById("screen").innerText = operator;
          operationSymbolSet = true;
        } else {
          checkOperator(operator);
          operator = button.innerText;
          document.getElementById("screen").innerText = firstArray + operator;
        }
        break;
      case button.getAttribute("id") === "dot":
        if (!firstArray.includes(button.innerText)) {
          firstArray.push(button.innerText);
        } else if (
          operationSymbolSet &&
          !secondArray.includes(button.innerText)
        ) {
          secondArray.push(button.innerText);
        }
        break;
      case button.getAttribute("id") === "equalTo":
        checkOperator(operator);
        operationSymbolSet = true;
        break;
      case button.getAttribute("id") === "restart":
        document.location.reload();
    }
  });
});
