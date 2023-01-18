const questions = [
  {
    letter: "a",
    threeQs: [
      {
        answer: "abducir",
        status: 0,
        question:
          "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
      },
      {
        answer: "ahorrar",
        status: 0,
        question:
          "CON LA A. Guardar dinero como previsión para necesidades futuras",
      },
      {
        answer: "alegre",
        status: 0,
        question: "CON LA A. Sinónimo de contento",
      },
    ],
  },
  {
    letter: "b",
    threeQs: [
      {
        answer: "bingo",
        status: 0,
        question: `CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso`,
      },
      {
        answer: "biblioteca",
        status: 0,
        question:
          "CON LA B. Lugar en el que se lleva a cabo el préstamo de libros",
      },
      {
        answer: "bodega",
        status: 0,
        question: "CON LA B. Lugar muy fresco donde se conservan los alimentos",
      },
    ],
  },
  {
    letter: "c",
    threeQs: [
      {
        answer: "churumbel",
        status: 0,
        question: "CON LA C. Niño, crío, bebé",
      },
      {
        answer: "cereza",
        status: 0,
        question: "CON LA C. Fruto del cerezo de color rojo oscuro",
      },
      {
        answer: "catapulta",
        status: 0,
        question:
          "CON LA C. Arma que se utilizaba para defender el castillo y que su función era tirar al enemigo grandes piedras",
      },
    ],
  },
  {
    letter: "d",
    threeQs: [
      {
        answer: "diarrea",
        status: 0,
        question:
          "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
      },
      {
        answer: "dragon",
        status: 0,
        question: "CON LA D. Animal mitológico que echa fuego por la boca",
      },
      {
        answer: "deuterio",
        status: 0,
        question: "CON LA D. Isótopo del hidrógeno",
      },
    ],
  },
  {
    letter: "e",
    threeQs: [
      {
        answer: "ectoplasma",
        status: 0,
        question:
          "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
      },
      {
        answer: "escudo",
        status: 0,
        question:
          "CON LA E. Los soldados se defendían con la espada y con su gran...",
      },
      {
        answer: "elemento",
        status: 0,
        question: "CON LA E. Sustancia formada por átomos iguales",
      },
    ],
  },
  {
    letter: "f",
    threeQs: [
      {
        answer: "facil",
        status: 0,
        question:
          "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
      },
      {
        answer: "frutero",
        status: 0,
        question: "CON LA F. Recipiente en el que se coloca la fruta",
      },
      {
        answer: "foso",
        status: 0,
        question:
          "CON LA F. Lugar excavado alrededor de la muralla, donde había agua y servía para defenderse",
      },
    ],
  },
  {
    letter: "g",
    threeQs: [
      {
        answer: "galaxia",
        status: 0,
        question:
          "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
      },
      {
        answer: "guitarra",
        status: 0,
        question:
          "CON LA G. Instrumento musical con seis cuerdas que hacemos sonar con los dedos",
      },
      {
        answer: "guerrero",
        status: 0,
        question: "CON LA G. Persona que defiende al castillo de los intrusos",
      },
    ],
  },
  {
    letter: "h",
    threeQs: [
      {
        answer: "harakiri",
        status: 0,
        question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
      },
      {
        answer: "hermano",
        status: 0,
        question:
          "CON LA H. ¿Cómo se llama la persona que tiene el mismo padre y la misma madre que tú?",
      },
      {
        answer: "halcon",
        status: 0,
        question:
          "CON LA H. Animal con alas, que se utilizaba en las cacerías para cazar animales pequeños",
      },
    ],
  },
  {
    letter: "i",
    threeQs: [
      { answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano" },
      {
        answer: "instrumentos",
        status: 0,
        question:
          "CON LA I. El laúd, arpa, zanfona, tamboril, palillos, rabel, ... Lo son",
      },
      {
        answer: "inmiscible",
        status: 0,
        question: "CON LA I. Líquido que no se puede mezclar",
      },
    ],
  },
  {
    letter: "j",
    threeQs: [
      {
        answer: "jabali",
        status: 0,
        question:
          "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
      },
      {
        answer: "juglar",
        status: 0,
        question:
          "CON LA J. Artista del entretenimiento en la Europa Medieval, dotado para tocar instrumentos, cantar, contar historias o leyendas. Se diferenciaban de los trovadores por sus orígenes más humildes, por tener como fin entretener y no ser autores de sus versos",
      },
      {
        answer: "jeringa",
        status: 0,
        question: "CON LA J. Instrumento para inyectar líquidos",
      },
    ],
  },
  {
    letter: "k",
    threeQs: [
      {
        answer: "kamikaze",
        status: 0,
        question:
          "CON LA K. Persona que se juega la vida realizando una acción temeraria",
      },
      {
        answer: "koala",
        status: 0,
        question:
          "CON LA K. Animal parecido a un oso pequeño y que podemos encontrar en Australia",
      },
      {
        answer: "kilos",
        status: 0,
        question:
          "CON LA K. Los puedes ganar cuando en tu salud diaria no cuidas la alimentación",
      },
    ],
  },
  {
    letter: "l",
    threeQs: [
      { answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo" },
      {
        answer: "libreria",
        status: 0,
        question: "CON LA L. Lugar en el que se compran libros",
      },
      { answer: "letrina", status: 0, question: "CON LA L. Retrete o lavabo" },
    ],
  },
  {
    letter: "m",
    threeQs: [
      {
        answer: "misantropo",
        status: 0,
        question:
          "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
      },
      {
        answer: "merlin",
        status: 0,
        question: "CON LA M. Mago consejero del famoso Arturo de Camelot",
      },
      {
        answer: "mendeleiev",
        status: 0,
        question:
          "CON LA M. Científico que ordenó los elementos en la tabla periódica",
      },
    ],
  },
  {
    letter: "n",
    threeQs: [
      {
        answer: "necedad",
        status: 0,
        question: "CON LA N. Demostración de poca inteligencia",
      },
      {
        answer: "naranja",
        status: 0,
        question:
          "CON LA N. Del campo semántico de los colores y el color deuna fruta con la que podemos hacer zumo",
      },
      {
        answer: "princesa",
        status: 0,
        question: "CONTIENE LA N. Hija de un rey y una reina",
      },
    ],
  },
  {
    letter: "ñ",
    threeQs: [
      {
        answer: "señal",
        status: 0,
        question:
          "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo",
      },
      {
        answer: "señor",
        status: 0,
        question:
          "CONTIENE LA Ñ. Jefe de los soldados. Dirige también las labores del campo",
      },
      {
        answer: "riñones",
        status: 0,
        question: "CONTIENE LA Ñ. Órganos encargados de filtrar la sangre",
      },
    ],
  },
  {
    letter: "o",
    threeQs: [
      {
        answer: "orco",
        status: 0,
        question:
          "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
      },
      {
        answer: "arturo",
        status: 0,
        question: "CONTIENE LA O. Famoso caballero de Camelot",
      },
      {
        answer: "organo",
        status: 0,
        question:
          "CON LA O.  Los ancianos pueden tener enfermedades por el deterioro del...",
      },
    ],
  },
  {
    letter: "p",
    threeQs: [
      {
        answer: "protoss",
        status: 0,
        question:
          "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
      },
      {
        answer: "capirote",
        status: 0,
        question:
          "CONTIENE LA P. Sombrero con forma de cucurucho que se ponían a veces las damas",
      },
      {
        answer: "pila",
        status: 0,
        question: "CON LA P. Generador eléctrico muy simple",
      },
    ],
  },
  {
    letter: "q",
    threeQs: [
      {
        answer: "queso",
        status: 0,
        question:
          "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
      },
      {
        answer: "yunque",
        status: 0,
        question: "CONTIENE LA Q. Aparato con el cual trabajaba el herrero",
      },
      {
        answer: "liquido",
        status: 0,
        question:
          "CONTIENE LA Q. Estado de agregación en el que se encuentra el mercurio",
      },
    ],
  },
  {
    letter: "r",
    threeQs: [
      { answer: "raton", status: 0, question: "CON LA R. Roedor" },
      { answer: "rey", status: 0, question: "CON LA R.  Marido de la reina" },
      {
        answer: "regar",
        status: 0,
        question: "CON LA R.  Echar agua a una planta o terreno",
      },
    ],
  },
  {
    letter: "s",
    threeQs: [
      {
        answer: "stackoverflow",
        status: 0,
        question:
          "CON LA S. Comunidad salvadora de todo desarrollador informático",
      },
      {
        answer: "sol",
        status: 0,
        question: "CON LA S. Nombre de una de las hijas del Cid",
      },
      { answer: "salir", status: 0, question: "CON LA S. Antónimo de entrar" },
    ],
  },
  {
    letter: "t",
    threeQs: [
      {
        answer: "terminator",
        status: 0,
        question:
          "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
      },
      {
        answer: "trovador",
        status: 0,
        question: "CON LA T. Poeta cantautor de la Edad Media",
      },
      {
        answer: "silbato",
        status: 0,
        question: "CONTIENE LA T. Pito con el que producimos un sonido",
      },
    ],
  },
  {
    letter: "u",
    threeQs: [
      {
        answer: "unamuno",
        status: 0,
        question:
          "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
      },
      {
        answer: "laud",
        status: 0,
        question: "CONTIENE LA U. Instrumento musical que usaba el trovador",
      },
      {
        answer: "urna",
        status: 0,
        question: "CON LA U. Caja o recipiente similar a un cofre",
      },
    ],
  },
  {
    letter: "v",
    threeQs: [
      {
        answer: "vikingos",
        status: 0,
        question:
          "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
      },
      {
        answer: "vidrieras",
        status: 0,
        question:
          "CON LA V. Ventanas hechas con cristales de colores. Se pueden ver en las catedrales o iglesias",
      },
      {
        answer: "verguenza",
        status: 0,
        question: "CON LA V. Emoción que nos hace enrojecer",
      },
    ],
  },
  {
    letter: "w",
    threeQs: [
      {
        answer: "sandwich",
        status: 0,
        question:
          "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
      },
      {
        answer: "wanda",
        status: 0,
        question: "CON LA W. Nombre de pila de la Bruja Escarlata",
      },
      {
        answer: "waterpolo",
        status: 0,
        question:
          "CON LA W. Deporte en equipo practicado en una piscina donde se debe meter la pelota en la porteria del equipo contrario",
      },
    ],
  },
  {
    letter: "x",
    threeQs: [
      {
        answer: "botox",
        status: 0,
        question:
          "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
      },
      {
        answer: "sexto",
        status: 0,
        question: "CONTIENE LA X. En una fila, el que va detrás del quiento",
      },
      {
        answer: "sexagesimal",
        status: 0,
        question:
          "CONTIENE LA X. Las horas, los minutos y los segundos pertenecen al sistema métrico...",
      },
    ],
  },
  {
    letter: "y",
    threeQs: [
      {
        answer: "peyote",
        status: 0,
        question:
          "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
      },
      {
        answer: "yelmo",
        status: 0,
        question:
          "CON LA Y. Parte de la armadura que protege la cabeza y rostro del guerrero",
      },
      {
        answer: "yema",
        status: 0,
        question: "CON LA Y. Parte amarilla del huevo",
      },
    ],
  },
  {
    letter: "z",
    threeQs: [
      {
        answer: "zen",
        status: 0,
        question:
          "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
      },
      {
        answer: "mazmorras",
        status: 0,
        question:
          "CONTIENE LA Z. Habitaciones pequeñas, oscuras y húmedas, situadas en el sótano. También se les llama cárceles",
      },
      {
        answer: "buzón",
        status: 0,
        question:
          "CONTIENE LA Z. Objeto donde se echan las cartas para el correo",
      },
    ],
  },
];

const finalScores = [
  { name: "James", correctLetters: 25 },
  { name: "Lily", correctLetters: 10 },
  { name: "Harry", correctLetters: 5 },
  { name: "Meredith", correctLetters: 18 },
  { name: "Ted", correctLetters: 27 },
];

let playerName;
let correctAnswerArray = [];
let failedAnswerArray = [];
let verification;

const endOfTheGame = () => {
  alert(
    `¡Fin del juego!, has hacertado ${correctAnswerArray.length} y fallado ${failedAnswerArray.length}`
  );
  verification = "done";
  let newScore = {
    name: playerName,
    correctLetters: correctAnswerArray.length,
  };
  finalScores.push(newScore);
  finalScores.sort((a, b) => b.correctLetters - a.correctLetters);
  console.table(finalScores);
};

const pasapalabra = (secondsToPlay) => {
  const startTime = new Date();
  let startTimeInSeconds = startTime.getUTCSeconds();

  let currentTime;
  let currentTimeInSeconds;
  let addition = 0;
  let elapsedSeconds = [];
  let timeDiferenceSixtySeconds;
  let previousDiferenceSixtySeconds;
  let finalTimeDiference;

  playerName = prompt(
    "Bienvenido, por favor, introduzca su nombre",
    "Jugador 1"
  );

  loop1: do {
    for (let i = 0; i < questions.length; i++) {
      currentTime = new Date();
      currentTimeInSeconds = currentTime.getUTCSeconds();

      switch (true) {
        case startTimeInSeconds < currentTimeInSeconds:
          timeDiferenceSixtySeconds = currentTimeInSeconds - startTimeInSeconds;
          break;

        case startTimeInSeconds > currentTimeInSeconds:
          timeDiferenceSixtySeconds =
            60 + currentTimeInSeconds - startTimeInSeconds;
          break;
      }

      if (previousDiferenceSixtySeconds > timeDiferenceSixtySeconds) {
        elapsedSeconds.push(60);
      }

      elapsedSeconds.forEach((e) => {
        addition += e;
      });

      finalTimeDiference = addition + timeDiferenceSixtySeconds;

      previousDiferenceSixtySeconds = timeDiferenceSixtySeconds;

      addition = 0;

      if (finalTimeDiference < secondsToPlay) {
        if (questions[i] !== " ") {
          let randomQuestion = Math.floor(
            Math.random() * questions[i]["threeQs"].length
          );
          let selectedQuestion;

          do {
            selectedQuestion = prompt(
              `${questions[i]["threeQs"][randomQuestion]["question"]}`
            );
            if (selectedQuestion === null || selectedQuestion === "") {
              alert("Por favor, escriba una respuesta válida");
            }
          } while (selectedQuestion === null || selectedQuestion === "");

          function toNormalForm(str) {
            return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          }

          let ourAnswer = toNormalForm(selectedQuestion);
          ourAnswer = ourAnswer.toLowerCase();
          let trueAnswer = questions[i]["threeQs"][randomQuestion]["answer"];
          trueAnswer = toNormalForm(trueAnswer);
          trueAnswer = trueAnswer.toLowerCase();

          switch (ourAnswer) {
            case "end":
              console.log(
                `Has hacertado ${correctAnswerArray.length} y fallado ${failedAnswerArray.length}`
              );
              finalScores.sort((a, b) => b.correctLetters - a.correctLetters);
              console.table(finalScores);
              return;
            case "pasapalabra":
              alert("Sigamos!");
              break;
            case trueAnswer:
              alert("Correcto! Sumas 1 Punto!");
              correctAnswerArray.push(questions[i]["letter"]);
              questions[i] = " ";
              break;
            default:
              alert("Incorrecto!");
              failedAnswerArray.push(questions[i]["letter"]);
              questions[i] = " ";
          }
        }
      } else {
        endOfTheGame();
        break loop1;
      }
    }
  } while (correctAnswerArray.length + failedAnswerArray.length !== 27);

  if (verification !== "done") {
    endOfTheGame();
  }
};

pasapalabra(130);
