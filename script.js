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

function goHome(){

  document.querySelector(".home-screen")
  .style.display = "flex";

  document.getElementById("allSections")
  .style.display = "none";
}

function playLion(){

  document.getElementById("lionAudio").play();
}

function checkAnimal(animal){

  const result =
  document.getElementById("animalResult");

  if(animal === "lion"){

    result.innerHTML =
    "✅ Correct! It's a Lion!";

  }

  else{

    result.innerHTML =
    "❌ Try Again!";
  }
}
