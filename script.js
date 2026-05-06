// SHOW SELECTED SECTION

function showSection(sectionId){

  document.querySelector(".home-screen")
  .style.display = "none";

  document.getElementById("allSections")
  .style.display = "block";

  const sections =
  document.querySelectorAll(
  ".grid-section, .game-section, .sound-game, .certificate"
  );

  sections.forEach(section => {

    section.style.display = "none";
  });

  document.getElementById(sectionId)
  .style.display = "block";
}


// GO BACK HOME

function goHome(){

  document.querySelector(".home-screen")
  .style.display = "flex";

  document.getElementById("allSections")
  .style.display = "none";
}


// PLAY LION SOUND

function playLion(){

  document.getElementById("lionAudio").play();
}


// CHECK ANIMAL SOUND ANSWER

function checkAnimal(animal){

  const result =
  document.getElementById("animalResult");

  if(animal === "lion"){

    result.innerHTML =
    "✅ Correct! It's a Lion!";

    animalDone = true;

    checkCompletion();
  }

  else{

    result.innerHTML =
    "❌ Try Again!";
  }
}


// ----------------------
// PROGRESS VARIABLES
// ----------------------

let alphabetCount = 0;
let numberCount = 0;
let colorCount = 0;
let shapeCount = 0;
let fruitCount = 0;
let vegetableCount = 0;
let animalCount = 0;


// ----------------------
// COMPLETION VARIABLES
// ----------------------

let alphabetDone = false;
let numberDone = false;
let colorDone = false;
let shapeDone = false;
let fruitDone = false;
let vegetableDone = false;
let animalDone = false;


// ----------------------
// ALPHABET
// ----------------------

function updateAlphabet(){

  alphabetCount++;

  document.getElementById(
  "alphabetProgress"
  ).value = alphabetCount;

  if(alphabetCount >= 26){

    document.getElementById(
    "alphabetBadge"
    ).style.display = "block";

    alphabetDone = true;

    checkCompletion();
  }
}


// ----------------------
// NUMBERS
// ----------------------

function updateNumbers(){

  numberCount++;

  document.getElementById(
  "numberProgress"
  ).value = numberCount;

  if(numberCount >= 10){

    document.getElementById(
    "numberBadge"
    ).style.display = "block";

    numberDone = true;

    checkCompletion();
  }
}


// ----------------------
// COLORS
// ----------------------

function updateColors(){

  colorCount++;

  document.getElementById(
  "colorProgress"
  ).value = colorCount;

  if(colorCount >= 8){

    document.getElementById(
    "colorBadge"
    ).style.display = "block";

    colorDone = true;

    checkCompletion();
  }
}


// ----------------------
// SHAPES
// ----------------------

function updateShapes(){

  shapeCount++;

  document.getElementById(
  "shapeProgress"
  ).value = shapeCount;

  if(shapeCount >= 7){

    document.getElementById(
    "shapeBadge"
    ).style.display = "block";

    shapeDone = true;

    checkCompletion();
  }
}


// ----------------------
// FRUITS
// ----------------------

function updateFruits(){

  fruitCount++;

  document.getElementById(
  "fruitProgress"
  ).value = fruitCount;

  if(fruitCount >= 7){

    document.getElementById(
    "fruitBadge"
    ).style.display = "block";

    fruitDone = true;

    checkCompletion();
  }
}


// ----------------------
// VEGETABLES
// ----------------------

function updateVegetables(){

  vegetableCount++;

  document.getElementById(
  "vegetableProgress"
  ).value = vegetableCount;

  if(vegetableCount >= 6){

    document.getElementById(
    "vegetableBadge"
    ).style.display = "block";

    vegetableDone = true;

    checkCompletion();
  }
}


// ----------------------
// ANIMALS
// ----------------------

function updateAnimals(){

  animalCount++;

  document.getElementById(
  "animalProgress"
  ).value = animalCount;

  if(animalCount >= 7){

    document.getElementById(
    "animalBadge"
    ).style.display = "block";

    animalDone = true;

    checkCompletion();
  }
}


// ----------------------
// LETTER GAME
// ----------------------

function completeLetterGame(){

  document.getElementById(
  "letterBadge"
  ).style.display = "block";
}


// ----------------------
// CHECK ALL COMPLETED
// ----------------------

function checkCompletion(){

  if(

    alphabetDone &&
    numberDone &&
    colorDone &&
    shapeDone &&
    fruitDone &&
    vegetableDone &&
    animalDone

  ){

    document.getElementById(
    "certificateBtn"
    ).disabled = false;

    alert(
    "🎉 Congratulations! Certificate Unlocked!"
    );
  }
}
