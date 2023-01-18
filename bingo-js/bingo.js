const bingo = () => {
  let playerName;
  let continuePlaying;
  let oneLineFinal;
  let oneLine;

  do {
    playerName = prompt("Please, write your name", "Player 1");

    if (playerName.length !== 0) {
      alert(
        `Hello ${playerName}, here's your bingo card and the score sistem!`
      );
    } else {
      alert(`Please, write a name`);
    }
  } while (playerName.length === 0);

  const scores = [
    { attempts: "less than 50", score: 100 },
    { attempts: "between 50 and 100", score: 50 },
    { attempts: "more than 100", score: 0 },
  ];

  const card = [
    { number: "randomNumber" },
    { number: "randomNumber" },
    { number: "randomNumber" },
    { number: "randomNumber" },
    { number: "randomNumber" },
    //next line
    { number: "randomNumber" },
    { number: "randomNumber" },
    { number: "randomNumber" },
    { number: "randomNumber" },
    { number: "randomNumber" },
    //next line
    { number: "randomNumber" },
    { number: "randomNumber" },
    { number: "randomNumber" },
    { number: "randomNumber" },
    { number: "randomNumber" },
  ];

  let newCard;

  do {
    for (let i = 0; i < card.length; i++) {
      const randomNumber = (min, max) => {
        const newNumber = Math.floor(Math.random() * (max - min + 1) + min);
        return newNumber;
      };

      let newElement;

      do {
        newElement = randomNumber(1, 90);
      } while (card.some((e) => e.number === newElement));

      card[i].number = newElement;
    }

    card.sort((a, b) => a.number - b.number);
    console.table(scores);
    console.table(card);

    newCard = confirm(
      "ACCEPT if you want this bingo card or CANCEL to change it"
    );
  } while (newCard === false);

  let alreadySaid = [];

  do {
    const generateNewRandomNumber = (min, max) => {
      confirm("Click on ACCEPT to generate a new number");
      let newNumber;

      do {
        newNumber = Math.floor(Math.random() * (max - min + 1) + min);
      } while (alreadySaid.some((e) => e === newNumber));

      return newNumber;
    };

    let randomNum = generateNewRandomNumber(1, 90);

    alreadySaid.push(randomNum);
    console.log(alreadySaid);
    console.log(`Number ${randomNum}`);

    const newTurn = () => {
      for (let i = 0; i < card.length; i++) {
        if (card[i].number === randomNum) {
          card[i].number = "X";
        }
      }
      console.table(card);
    };

    newTurn();

    let matchesFirstLine = [];
    let matchesSecondLine = [];
    let matchesThirdLine = [];

    for (let i = 0; i < card.length / 3; i++) {
      if (card[i].number === "X") {
        matchesFirstLine.push(card[i].number);
      }
    }

    for (let i = card.length / 3; i < (2 * card.length) / 3; i++) {
      if (card[i].number === "X") {
        matchesSecondLine.push(card[i].number);
      }
    }

    for (let i = (2 * card.length) / 3; i < card.length; i++) {
      if (card[i].number === "X") {
        matchesThirdLine.push(card[i].number);
      }
    }

    if (
      matchesFirstLine.length === card.length / 3 &&
      matchesSecondLine.length === card.length / 3 &&
      matchesThirdLine.length === card.length / 3
    ) {
      if (oneLineFinal !== "already said") {
        oneLineFinal = alert("BINGO!");
        oneLineFinal = "already said";
      }

      const finalScores = [
        { name: "James", attempts: 38, score: 100 },
        { name: "Lily", attempts: 71, score: 50 },
        { name: "Harry", attempts: 110, score: 0 },
        { name: "Meredith", attempts: 45, score: 100 },
        { name: "Ted", attempts: 68, score: 50 },
      ];

      if (alreadySaid.length <= 50) {
        let newScore = {
          name: playerName,
          attempts: alreadySaid.length,
          score: 100,
        };
        finalScores.push(newScore);
      } else if (alreadySaid.length > 50 && alreadySaid.length <= 100) {
        let newScore = {
          name: playerName,
          attempts: alreadySaid.length,
          score: 50,
        };
        finalScores.push(newScore);
      } else if (alreadySaid.length > 100) {
        let newScore = {
          name: playerName,
          attempts: alreadySaid.length,
          score: 0,
        };
        finalScores.push(newScore);
      }

      finalScores.sort((a, b) => a.attempts - b.attempts);
      console.table(finalScores);

      break;
    } else if (
      matchesFirstLine.length === card.length / 3 ||
      matchesSecondLine.length === card.length / 3 ||
      matchesThirdLine.length === card.length / 3
    ) {
      if (oneLine !== "already said") {
        oneLine = alert("LINE!");
        oneLine = "already said";
      }
    }

    const askForNewTurn = () => {
      const newTurn = confirm("ACCEPT to continue, CANCEL to exit");
      return newTurn;
    };

    continuePlaying = askForNewTurn();
  } while (continuePlaying === true);

  let newRound = confirm("ACCEPT for a new game or CANCEL to exit");

  if (newRound === true) {
    bingo();
  } else {
    alert("See you!");
  }
};

bingo();
