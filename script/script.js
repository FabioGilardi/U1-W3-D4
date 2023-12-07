// Genero un array di numeri da 1 a 76

const bingoNumbers = [];

const numberGenerator = function () {
  for (let i = 0; i < 76; i++) {
    // Inserisco i numeri nell'array
    bingoNumbers.push(i + 1);

    // creo le caselle per il bingo
  }
};

const boxGenerator = function () {
  const boxContainer = document.getElementById("bingo-boxes");
  for (let i = 0; i < 76; i++) {
    const box = document.createElement("div");
    box.innerText = i + 1;

    boxContainer.appendChild(box);
  }
};

const numberExtractor = function () {
  const putOnScreen = document.getElementById("extracted-number");
  const extractedBox = document.querySelectorAll("#bingo-boxes div");
  for (let i = 0; i < 76; i++) {
    extractedBox[i].classList.remove("extracted-now");
  }
  //   Parte relativa all'estrazione
  if (bingoNumbers.length > 0) {
    const randomNumber = Math.floor(Math.random() * bingoNumbers.length);
    const screenNumber = bingoNumbers[randomNumber];
    bingoNumbers.splice([randomNumber], 1);
    putOnScreen.classList.remove("hidden");
    putOnScreen.innerText = screenNumber;
    console.log(bingoNumbers);

    // Evidenziare il numero estratto
    extractedBox[screenNumber - 1].classList.add("extracted-now");
    extractedBox[screenNumber - 1].classList.add("already-extracted");
  } else {
    putOnScreen.innerText = "FINE";
  }
};

numberGenerator();

boxGenerator();
