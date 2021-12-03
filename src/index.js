import { App } from "./controllers/app";

const resultContainer = document.getElementById("result");
const input = document.getElementById("input");
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const app = new App();
  resultContainer.innerText = "";
  app.sendMessage(input.value);
  resultContainer.innerText = app.getResult();
});
