function generatePoem(event) {
  event.preventDefault();
  let poemFormElement = document.querySelector("#poem");

  new Typewriter("#poem", {
    strings: "The poem will go here",
    autoStart: true,
    delay: 1,
    cursor: ""
  });
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
