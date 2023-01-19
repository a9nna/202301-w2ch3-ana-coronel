function calculator() {
  let number;
  const numbers = [];
  const results = [];
  const numbersToOperateWith = [];∫

  const isNumber = (val) => {
    if (val !== null && val.includes("/")) {
      const operation = val;
      const separation = operation.split("/");
      val = separation[0] / separation[1];
    }
  };

  function decimals(val) {
    if (!val % 1 === 0) {
      results.push(val.toFixed(3));
    } else {
      results.push(val);
    }
  }

  do {
    number = prompt("Enter a number");
    isNumber(number);
  } while (number !== null);

  numbers.pop();

  if (numbers.length === 1) {
    const result1 = Math.sqrt(numbers[0]);
    decimals(result1);
    return `The square root of ${numbers[0]} is ${results}`;
  }

  const multipleOperations = () => {
    let add = Number(numbersToOperateWith[0]);
    let subs = Number(numbersToOperateWith[0]);
    let mult = Number(numbersToOperateWith[0]);
    let div = Number(numbersToOperateWith[0]);

    for (let i = 1; i < numbersToOperateWith.length; i++) {
      add += Number(numbersToOperateWith[i]);
      subs -= Number(numbersToOperateWith[i]);
      mult *= Number(numbersToOperateWith[i]);
      div /= Number(numbersToOperateWith[i]);
    }

    decimals(add);
    decimals(subs);
    decimals(mult);
    decimals(div);

    return results;
  };

  if (!isNaN(val)) {
    numbers.push(val);
  } else if (isNaN(val)) {
    alert("The entered data is not a number, please try again");
  }

  const allResults = multipleOperations(...numbers);

  console.log(`The result of addition is ${allResults[0]}`);
  console.log(`The result of substraction is ${allResults[1]}`);
  console.log(`The result of multiplication is ${allResults[2]}`);
  console.log(`The result of division is ${allResults[3]}`);
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
} while (anotherOne !== null);
