function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "109f833e331a8e73of380d4a6cb25ft3";
  let prompt = `User instructions: Generate a short American style poem about ${instructionsInput.value}`;
  let context =
    "You are an expert American poet and love to write short poems. Your mission is to generate a 4 line poem.  Make sure to follow the user instructions.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemFormElement = document.querySelector("#poem");
  poemFormElement.classList.remove("hidden");
  poemFormElement.innerHTML = `<div class="generating"> ⏳Generating your poem about ${instructionsInput.value}</div>`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
