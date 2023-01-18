function isdiCodersAirlines() {
  let welcome = prompt("Write your name");
  alert(`Welcome ${welcome}, it is a pleasure you visit ISDI Coders Airlines`);

  const flights = [
    { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
    { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
    { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
    { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
    { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
    { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
    { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
    { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
    { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
    { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
  ];

  for (let i = 0; i < flights.length; i++) {
    if (flights[i].scale) {
      flights[i].scale = "it does a scale";
    } else {
      flights[i].scale = `it doesn't do a scale`;
    }
    console.log(
      `The flight from: ${flights[i].from}, to: ${flights[i].to} costs ${flights[i].cost}€ and ${flights[i].scale}`
    );
  }

  let addition = flights[0].cost;

  for (let i = 1; i < flights.length; i++) {
    addition += flights[i].cost;
  }

  addition /= flights.length;
  console.log(`The average cost of flights is ${addition.toFixed(2)}€`);

  let flightsStopOff = [];

  for (let i = 0; i < flights.length; i++) {
    if (flights[i].scale === "it does a scale") {
      flightsStopOff.push(flights[i]);
    }
  }
  console.log(`${flightsStopOff.length} flights do a scale`);

  let lastFlights = [];

  for (let i = 5; i < flights.length; i++) {
    lastFlights.push(flights[i].to);
  }
  console.log(`The last five flights are to ${lastFlights}`);

  let user = prompt(
    `Click on accept if you are an ADMIN or cancel if you are an USER`
  );

  if (user === "") {
    let doOrErase;
    do {
      doOrErase = prompt(
        `Write 'add' or 'delete' (without commas) and accept to modify the flights list`
      );

      if (doOrErase === "add") {
        if (flights.length == 15) {
          alert(
            "You have already registered 15 flights, please delete one to add another"
          );
        } else {
          let newTo;
          let newFrom;
          let newCost;
          let newScale;

          let newFlight = { id: flights.length };

          do {
            newTo = prompt("Write the new destination");
            if (newTo === "" || newTo === null) {
              alert("Please, enter a valid value");
            }
            newFlight.to = newTo;
          } while (typeof newTo !== "string" || newTo.length === 0);

          do {
            newFrom = prompt("Write the new origin");
            if (newFrom === "" || newFrom === null) {
              alert("Please, enter a valid value");
            }
            newFlight.from = newFrom;
          } while (typeof newFrom !== "string" || newFrom.length === 0);

          do {
            newCost = prompt("Write the new cost");
            if (newCost === "" || newCost === null) {
              alert("Please, enter a valid value");
            }
            newFlight.cost = Number(newCost);
          } while (typeof newCost !== "string" || newCost.length === 0);

          do {
            newScale = prompt(
              `Write 'true' if it do an scale or 'false' if it doesn't`
            );
            if (newScale === "" || newScale === null) {
              alert("Please, enter a valid value");
            }
            newFlight.scale = newScale;
          } while (typeof newScale !== "string" || newScale.length === 0);

          if (newFlight.scale) {
            newFlight.scale = "it does a scale";
          } else {
            newFlight.scale = `it doesn't do a scale`;
          }
          flights.push(newFlight);
        }
      } else if (doOrErase === "delete") {
        let erase = prompt("Write the id of the flight you want to delete");
        flights.splice(erase, 1);
      }

      console.log(flights);
    } while (doOrErase !== null);
  } else if (user === null) {
    let price = prompt(`Set a maximum price`, 0);
    let cheaper = [];

    for (let i = 0; i < flights.length; i++) {
      if (flights[i].cost <= price) {
        cheaper.push(flights[i]);
      }
    }

    for (let j = 0; j < cheaper.length; j++) {
      console.log(
        `The flight from: ${cheaper[j].from}, to: ${cheaper[j].to} costs ${cheaper[j].cost}€ and ${cheaper[j].scale}`
      );
    }
  }
}

isdiCodersAirlines();
