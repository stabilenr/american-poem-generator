function generatePoem(event) {
  event.preventDefault();

  let poemFormElement = document.querySelector("#poem");

  new Typewriter("#poem", {
    strings:
      "That it will never come again<br>Is what makes life so sweet.<br>Believing what we do not believe<br>Does not exhilarate.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
