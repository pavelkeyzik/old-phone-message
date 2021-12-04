import { App } from "./controllers/app";

const resultContainer = document.getElementById("result");
const input = document.getElementById("input");
const form = document.getElementById("form");
const buttonKeys = {};

document.querySelectorAll(".phone-buttons button").forEach((button) => {
  buttonKeys[button.id] = button;
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const app = new App();
  resultContainer.innerText = "";
  app.sendMessage(input.value);

  const result = app.getResult();
  resultContainer.innerText = result;

  for (let i = 0; i < result.length; i++) {
    const value = result[i];
    const nextValue = result[i + 1];
    const buttonToPress = buttonKeys[`phone-button-key-${value}`];

    if (value && buttonToPress) {
      buttonToPress.classList.add("phone-button-pressed");
      await delay(nextValue === "-" ? 1500 : 500);
      buttonToPress.classList.remove("phone-button-pressed");
    }

    await delay(200);
  }
});

async function delay(ms = 500) {
  return new Promise((res) => setTimeout(() => res(), ms));
}
