const containerE1 = document.querySelector(".container");

const careers = ["youtuber", "producer", "web developer", "freelancer"];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  containerE1.innerHTML = ` 
  <h1>I am a ${careers[careerIndex].slice(0, characterIndex)}</h1>`;

  characterIndex++;

  if (characterIndex === careers[careerIndex].length + 1) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
}
