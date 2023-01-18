function calculator() {
  let number;
  let numbers = [];
  let results = [];

  function isNumber(val) {
    if (val !== null && val.includes("/")) {
      let operation = val;
      let separation = operation.split("/");
      val = separation[0] / separation[1];
    }

    if (!isNaN(val)) {
      numbers.push(val);
    } else {
      alert("The entered data is not a number, please try again");
    }
  }

  function decimals(val) {
    if (val % 1 !== 0) {
      results.push(val.toFixed(3));
    } else {
      results.push(val);
    }
  }

  do {
    number = prompt("Enter a number");
    isNumber(number);
  } while (number != null);

  numbers.pop();

  if (numbers.length === 1) {
    let result1 = Math.sqrt(numbers[0]);
    decimals(result1);
    console.log(`The square root of ${numbers[0]} is ${results}`);
  } else {
    function multipleOperations() {
      let add = Number(arguments[0]);
      let subs = Number(arguments[0]);
      let mult = Number(arguments[0]);
      let div = Number(arguments[0]);

      for (let i = 1; i < arguments.length; i++) {
        add += Number(arguments[i]);
        subs -= Number(arguments[i]);
        mult *= Number(arguments[i]);
        div /= Number(arguments[i]);
      }
      decimals(add);
      decimals(subs);
      decimals(mult);
      decimals(div);

      return results;
    }
    let allResults = multipleOperations(...numbers);

    console.log(`The result of addition is ${allResults[0]}`);
    console.log(`The result of substraction is ${allResults[1]}`);
    console.log(`The result of multiplication is ${allResults[2]}`);
    console.log(`The result of division is ${allResults[3]}`);
  }
}

calculator();

let anotherOne;

do {
  anotherOne = prompt("New numbers? accept/cancel");
  if (anotherOne === null) {
    alert(`Bye!`);
  } else {
    calculator();
  }
} while (anotherOne != null);
