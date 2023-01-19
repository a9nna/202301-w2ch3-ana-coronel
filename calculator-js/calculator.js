function calculator() {
  let number1;
  let number2;
  const numbers = [];
  const results = [];

  function isNumber(val) {
    if (val !== null && val.includes("/")) {
      const operation = val;
      const separation = operation.split("/");
      val = separation[0] / separation[1];
    }

    if (!isNaN(val)) {
      numbers.push(val);
    } else if (isNaN(val)) {
      alert("The entered data is not a number, please try again");
    }
  }

  function decimals(val) {
    if (!val % 1 === 0) {
      results.push(val.toFixed(3));
    } else {
      results.push(val);
    }
  }

  do {
    number1 = prompt("Enter the first number");
    isNumber(number1);
    number1 = Number(number1);
  } while (isNaN(number1));

  do {
    number2 = prompt("Enter the second number");
    isNumber(number2);
    number2 = Number(number2);
  } while (isNaN(number2));

  if (numbers[1] === "" || numbers[1] === null) {
    let result1 = Math.sqrt(numbers[0]);
    if (result1 % 1 !== 0) {
      result1 = result1.toFixed(3);
    }

    console.log(`The square root of ${numbers[0]} is ${result1}`);
  } else {
    const addition = number1 + number2;
    const substraction = number1 - number2;
    const product = number1 * number2;
    const division = number1 / number2;

    decimals(addition);
    decimals(substraction);
    decimals(product);
    decimals(division);

    console.log(`The result of ${numbers[0]} + ${numbers[1]} is ${results[0]}`);
    console.log(`The result of ${numbers[0]} - ${numbers[1]} is ${results[1]}`);
    console.log(`The result of ${numbers[0]} * ${numbers[1]} is ${results[2]}`);
    console.log(`The result of ${numbers[0]} / ${numbers[1]} is ${results[3]}`);
  }
}

calculator();
