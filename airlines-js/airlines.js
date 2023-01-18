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
}

isdiCodersAirlines();
